-- Create a DB-side function to generate cuids

-- Put a unique host ID (int) here per server instance.
-- Once set, this value should not be changed.
SET plpgsql.cuid_hostid = "1058923";

-- Create the sequence used to track ID counts. Used in _safeCounter()
CREATE SEQUENCE IF NOT EXISTS "cuid_seq";

-- Get the next ID in counter. The sequence will reset after max_id is reached.
CREATE OR REPLACE FUNCTION _safeCounter() RETURNS VARCHAR AS $$
DECLARE
	seq_id bigint;
	max_id int := 1679616;
BEGIN
	SELECT nextval('cuid_seq') INTO seq_id;

	IF seq_id > max_id THEN
		SELECT setval('cuid_seq', 0) INTO seq_id;
	END IF;

	RETURN pad(base36enc(seq_id), 4);
END;
$$ LANGUAGE PLPGSQL;

-- Uses the backend PID and a unique host ID to generate a fingerprint.
-- Unfortunately getting the hostname of a Pg server is rather expensive so we opt for
-- a static unique host ID.
CREATE OR REPLACE FUNCTION _fingerprint() RETURNS VARCHAR AS $$
DECLARE
	padding int := 2;
	ret varchar;
BEGIN
	ret := pad(base36enc(pg_backend_pid()), padding);
	ret := ret || pad(base36enc(current_setting('plpgsql.cuid_hostid')::bigint), padding);
	RETURN ret;
END;
$$ LANGUAGE PLPGSQL;

-- Encodes a base-10 bigint to a base-36 string representation.
CREATE OR REPLACE FUNCTION base36enc(num bigint) RETURNS VARCHAR AS $$
DECLARE
	base36 char[];
	ret varchar;
	val bigint;
	tmp bigint;
BEGIN
	base36 := ARRAY[
		'0','1','2','3','4','5','6','7','8','9','a','b',
		'c','d','e','f','g','h','i','j','k','l','m','n',
		'o','p','q','r','s','t','u','v','w','x','y','z'
	];

	IF num ISNULL THEN
		RETURN NULL;
	END IF;

	val := num;
	ret := '';
	LOOP
			tmp := val % 36 + 1;
			ret := base36[tmp] || ret;
			val := val / 36;
			IF val = 0 THEN
					exit;
			END IF;
	END LOOP;

	IF num < 0 THEN
			ret := '-' || ret;
	END IF;

	RETURN ret;
END;
$$ LANGUAGE PLPGSQL;

-- Adds zero-padding of a size to a num string. If the string is longer than size
-- it gets truncated to the left.
CREATE OR REPLACE FUNCTION pad(num varchar, size int) RETURNS VARCHAR AS $$
BEGIN
	RETURN lpad(right(num, size), size, '0');
END;
$$ LANGUAGE PLPGSQL;

-- Get value of current timestamp encoded as base-36
CREATE OR REPLACE FUNCTION _timestamp() RETURNS VARCHAR AS $$
DECLARE
	now_ts bigint;
BEGIN
	SELECT floor(extract(EPOCH FROM clock_timestamp()))
		INTO now_ts;

	RETURN base36enc(now_ts);
END;
$$ LANGUAGE PLPGSQL;

-- Get a random base-36 valid string of size block_size.
CREATE OR REPLACE FUNCTION _randomBlock() RETURNS VARCHAR AS $$
DECLARE
	base36 varchar := '0123456789abcdefghijklmnopqrstuvwxyz';
	block_size int := 4;
	val varchar;
BEGIN
	SELECT array_to_string(ARRAY(
		SELECT substring(base36 FROM (random() * 36)::int FOR 1)
			FROM generate_series(1, block_size)), '', '0')
		INTO val;

	RETURN val;
END;
$$ LANGUAGE PLPGSQL;

-- Generates a new Collision-resistant ID (CUID)
CREATE OR REPLACE FUNCTION cuid() RETURNS VARCHAR AS $$
DECLARE
	ret varchar;
BEGIN
	ret := 'c';
	ret := ret || _timestamp();
	ret := ret || _safeCounter();
	ret := ret || _fingerprint();
	ret := ret || _randomBlock();
	ret := ret || _randomBlock();
	RETURN ret;
END;
$$ LANGUAGE PLPGSQL;


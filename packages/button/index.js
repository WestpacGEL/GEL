import React from 'react';
import styled from '@emotion/styled';

const VGUTTER = 8;
const HGUTTER = 16;

const El = styled.button(({ brand, theme }) => ({
  appearance: 'none',
  backgroundColor: theme.background,
  border: 0,
  borderRadius: theme.borderRadius,
  color: 'white',
  display: 'inline-flex',
  fontSize: 'inherit',
  padding: `${VGUTTER}px ${HGUTTER}px`,
  position: 'relative',
  textDecoration: 'none',
  textAlign: 'center',

  '&:hover': {
    background: theme.link,
  },
}));

const Button = ({ ...props }) => {
  const as = props.href ? 'a' : 'button';
  return <El as={as} {...props} />;
};
export default Button;

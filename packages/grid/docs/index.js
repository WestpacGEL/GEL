import React from 'react';
import ReactDOM from 'react-dom';

import { Grid } from '../index.js';
const Div = props => <div style={{ color: 'red' }} {...props} />;

ReactDOM.render(
  <Grid>I think it's working</Grid>,

  document.getElementById('root')
);

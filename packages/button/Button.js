import React from 'react';
import { styled } from '@westpac/core/theme';

const VGUTTER = 8;
const HGUTTER = 16;

export const Button = styled.button(({ brand, theme }) => ({
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

/** @jsx jsx */

import React, { createContext } from 'react';
import { defaultProps } from './Form';

const { size, spacing, isInline } = defaultProps;

export const FormContext = createContext({ size, spacing, isInline });

export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;

export default FormContext;

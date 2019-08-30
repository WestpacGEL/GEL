/** @jsx jsx */

import React, { createContext } from 'react';
import { defaultProps } from './Form';

const { size, spacing, inline } = defaultProps;

export const FormContext = createContext({ size, spacing, inline });

export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;

export default FormContext;

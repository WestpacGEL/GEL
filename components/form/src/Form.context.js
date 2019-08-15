/** @jsx jsx */

import React, { createContext } from 'react';

export const FormContext = createContext({ size: null, spacing: null, inline: null });

export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;

export default FormContext;

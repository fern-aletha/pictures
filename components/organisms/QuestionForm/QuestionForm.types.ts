import type { FormikContextType, FormikConfig } from 'formik';

export type Values = Record<string, string | string[]>;

export type Formik = FormikContextType<Values>;

export type ContainerProps = {
  formData: BlocksList;
};

export type ViewProps = {
  formik: Formik;
  goBack: () => void;
  last: boolean;
  formData: BlocksList;
};

export type OnSubmit = FormikConfig<Values>['onSubmit'];

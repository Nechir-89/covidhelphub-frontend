import React from 'react';
import Style from "../formikStyle.module.css";
import {
  textFieldSet,
  checkRadioFieldSet,
  FormField,
} from '../types';

import CheckRadioFieldComponent from './CheckRadioFieldComponent';
import TextFieldComponent from './TextFieldComponent';


interface Props {
  formField: FormField;
}

function FieldComponentWrapper(component: JSX.Element | undefined) {
  if (!component) {
    return null;
  }
  return <>
    <div className={Style.formField}>
      {component}
    </div>
  </>
}

function FieldComponent(props: Props) {
  const { formField } = props;

  let component: JSX.Element | undefined = undefined;

  if (textFieldSet.has(formField.type)) {
    component = <TextFieldComponent formField={formField} />;
  } else if (checkRadioFieldSet.has(formField.type)) {
    component = <CheckRadioFieldComponent formField={formField} />;
  }
  return FieldComponentWrapper(component);
}

export default FieldComponent;

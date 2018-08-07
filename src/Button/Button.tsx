import * as React from 'react';
import classNames from 'classnames';
import './Button.css';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  type: 'air' | 'mall';
}

export const Button = (props: ButtonProps) => (
  <button
    {...props}
    className={classNames('Button', props.type, { disabled: props.disabled })}>
    {props.label}
  </button>
);

export default Button;

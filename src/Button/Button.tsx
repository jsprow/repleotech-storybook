import classNames from 'classnames';
import * as React from 'react';
import './Button.css';

export interface IButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  type: 'air' | 'mall';
}

export const Button = (props: IButtonProps) => (
  <button
    {...props}
    className={classNames('Button', props.type, { disabled: props.disabled })}>
    {props.label}
  </button>
);

export default Button;

import * as React from 'react';
import './Title.css';

interface TitleProps {
  label: string;
}

export const Title = (props: TitleProps) => (
  <span className="Title">{props.label}</span>
);

export default Title;

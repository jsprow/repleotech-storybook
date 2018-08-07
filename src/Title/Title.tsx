import * as React from 'react';
import './Title.css';

interface ITitleProps {
  label: string;
}

export const Title = (props: ITitleProps) => (
  <span className="Title">{props.label}</span>
);

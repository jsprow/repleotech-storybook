import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../utils';
import Title from './Title';

(storiesOf('Components', module) as any).addWithJSX(
  'Title',
  wInfo(`

  ### Notes

  This is a title

  ### Usage
  ~~~js
  <Title
    label={'Welcome'}
  />
  ~~~`)(() => <Title label={text('label', 'Welcome')} />)
);

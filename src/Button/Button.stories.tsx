import { boolean, text, selectV2 } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../utils';
import { Button } from './Button';

(storiesOf('Components', module) as any).addWithJSX(
  'Button',
  wInfo(`

  ### Notes

  This is a button

  ### CSS
  ~~~css
  .Button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 25vw;
    font-weight: 300;
    font-size: 3vh;
  }

  .Button.air {
    color: #fff;
    background-color: #2d5eb2;
  }

  .Button.mall {
    color: #fff;
    background-color: #111;
    box-shadow: 0 0 4px 2px #72b24b;
    border-radius: 6vh;
    transition: 
      background-color 500ms ease-in-out, 
      box-shadow 500ms ease-in-out;
  }

  .Button.disabled {
    background-color: #aaa;
    box-shadow: 0 0 4px 2px transparent;
    pointer-events: none;
    cursor: no-drop;
  }
  ~~~

  ### Usage
  ~~~js
  <Button
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~
  `)(() => (
    <Button
      label={text('label', 'Enroll')}
      disabled={boolean('disabled', false)}
      onClick={() => alert('hello there')}
      type={selectV2('type', { Air: 'air', Mall: 'mall' }, 'mall')}
    />
  ))
);

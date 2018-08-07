import { withInfo, WrapStoryProps } from '@storybook/addon-info';
import { RenderFunction } from '@storybook/react';
import * as wInfoStyle from './styles.json';

export type WInfo = (
  text: string
) => (
  storyFn: RenderFunction
) => (context?: object | undefined) => React.ReactElement<WrapStoryProps>;

export const wInfo: WInfo = text =>
  withInfo({
    inline: true,
    source: false,
    styles: wInfoStyle,
    text: text
  });

import type { CSSObject } from '@emotion/css';
// @TODO - Ideally, this should be replicated here instead of importing.
import styleFunctionSx from '@mui/system/styleFunctionSx';
import { css, cache } from './emotion';
import type { PluginCustomOptions } from './cssFnValueToVariable';

export function processCssObject(cssObj: object, themeArgs?: PluginCustomOptions['themeArgs']) {
  const { theme } = themeArgs ?? {};
  const processedObj = (
    theme
      ? styleFunctionSx({
          // Does not support shorthand as of now because
          // it also adds the spacing multiplier
          sx: () => cssObj,
          ...themeArgs,
        })
      : cssObj
  ) as CSSObject;
  const className = css(processedObj);
  return cache.registered[className];
}

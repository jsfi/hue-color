# hue-color

> Get the x and y coordinates of a color in CIE color space from rgb.

## Install

This module requires node >=4.0.0

```
npm install --save hue-color
```

## Usage

```js
let xy = require('hue-color')(rgb, gamut);
```

## Example

```js
let xy = require('hue-color')(
    [0, 255, 0] //rgb
);

// xy = [0.1724161431490603, 0.7467966085220437]
```

```js
/* with color gamut
 * gamut can be A, B, C or undefined
 * @see http://www.developers.meethue.com/documentation/supported-lights
 */
let xy = require('hue-color')(
    [0, 255, 0], //rgb
    'A'
);

// xy = [0.2151, 0.7106]
```

## Next steps

Check accuracy of example values: http://www.developers.meethue.com/documentation/hue-xy-values

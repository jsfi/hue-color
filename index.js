/*
 * hue-color
 * https://github.com/jsfi/cli-timetracker
 *
 * @see http://www.developers.meethue.com/documentation/color-conversions-rgb-xy
 *
 * Copyright (c) 2015 Martin Sachse
 * Licensed under the MIT license.
 */

'use strict';

const threshold = 0.04045;
const exponent = 2.4;
const over = 0.055;
const under = 12.92;
const rX = 0.664511;
const gX = 0.154324;
const bX = 0.162028;
const rY = 0.283881;
const gY = 0.668433;
const bY = 0.047685;
const rZ = 0.000088;
const gZ = 0.072310;
const bZ = 0.986039;
const gamutTypes = {
    //Hue LightStrips, Hue Living Colors
    a: [
        [0.704, 0.296],
        [0.2151, 0.7106],
        [0.138, 0.08]
    ],
    //Hue bulb, Hue Spot, Color Light Module
    b: [
        [0.675, 0.322],
        [0.409, 0.518],
        [0.167, 0.04]
    ],
    //Hue Go, Hue LightStrips Plus
    c: [
        [0.675, 0.322],
        [0.2151, 0.7106],
        [0.167, 0.04]
    ],
    fallback: [
        [1, 0],
        [0, 1],
        [0, 0]
    ]
}

module.exports = function(color, type) {
    let r = correction(color[0] / 255);
    let g = correction(color[1] / 255);
    let b = correction(color[2] / 255);

    let X = r * rX + g * gX + b * bX;
    let Y = r * rY + g * gY + b * bY;
    let Z = r * rZ + g * gZ + b * bZ;

    let x = X / (X + Y + Z);
    let y = Y / (X + Y + Z);

    let gamut = (type in gamutTypes) ? gamutTypes[type] : gamutTypes.fallback;

    return require('nearest-point-inside-triangle')(gamut, [x, y]);
};

function correction(val) {
    return (val > threshold)
        ? Math.pow((val + over) / (1 + over), exponent)
        : (val / under);
}

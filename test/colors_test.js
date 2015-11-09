'use strict';

const expect = require('expect.js');

const colors = require('./colors');
const gamuts = ['a', 'b', 'c'];

let hueColor = require('../');

/*global describe*/
/*global it*/

describe('colors', function() {
    /* 145 colors => 435 tests */
    colors.forEach(color => {
        describe(color.name, function() {
            gamuts.forEach(gamut => {
                it('gamut ' + gamut, function () {
                    let xy = hueColor(color.rgb, gamut);
                    let dx = Math.abs(xy[0] - color[gamut][0]);
                    let dy = Math.abs(xy[1] - color[gamut][1]);

                    /* 346 errors
                    expect(dx).to.be.lessThan(Number.EPSILON);
                    expect(dy).to.be.lessThan(Number.EPSILON);
                    */

                    /* 170 errors
                    expect(toDec(dx, 4)).to.be(0);
                    expect(toDec(dy, 4)).to.be(0);
                    */

                    /* 102 errors
                    expect(toDec(dx, 3)).to.be(0);
                    expect(toDec(dy, 3)).to.be(0);
                    */

                    /* 40 errors
                    expect(toDec(dx, 2)).to.be(0);
                    expect(toDec(dy, 2)).to.be(0);
                    */

                    /* all ok*/
                    expect(toDec(dx, 1)).to.be(0);
                    expect(toDec(dy, 1)).to.be(0);

                });
            });
        });
    });
});

function toDec(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

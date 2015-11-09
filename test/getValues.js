//http://www.developers.meethue.com/documentation/hue-xy-values
//execute in developer-tools
var trs = Array.prototype.slice.call(document.getElementsByTagName('tr'));

//remove table-head
trs.shift();

var colors = trs.map(function(tr) {
    var tds = Array.prototype.slice.call(tr.children);

    return {
        name: tds[1].innerText,
        rgb: tds[2].innerText.replace(/[\(\)]/g, '').split(',').map(function(num) { return parseInt(num); }),
        a: tds[3].innerText.replace(/[\[\]]/g, '').split(',').map(parseFloat),
        b: tds[4].innerText.replace(/[\[\]]/g, '').split(',').map(parseFloat),
        c: tds[5].innerText.replace(/[\[\]]/g, '').split(',').map(parseFloat)
    }
});

console.log(colors);
copy(colors);

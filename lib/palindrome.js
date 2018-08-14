// module.exports = (str) => {
//     var len = str.length;
//     for ( var i = 0; i < Math.floor(len/2); i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }


module.exports = (str) => {
    var re = /[^A-Za-z0-9]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    if (lowRegStr == reverseStr) {
        return true
    } else {
        return false
    }
  }

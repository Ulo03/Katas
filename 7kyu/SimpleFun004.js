// https://www.codewars.com/kata/588425ee4e8efb583d000088

const phoneCall = (min1, min2_10, min11, s) => {
    let mins = 0, i;
    if (s-min1 >= 0) {
        s -= min1;
        mins++;
    }
    for (i = 2; i <= 10 && s-min2_10 >= 0; i++) {
        s -= min2_10;
        mins++;
    }
    while (s-min11 >= 0 && i > 10) {
        s -= min11;
        mins++;
    }
    return Math.floor(mins);
}

module.exports = {phoneCall};
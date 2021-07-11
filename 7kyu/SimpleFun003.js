// https://www.codewars.com/kata/588422ba4e8efb583d00007d

const lateRide = (n) => {
    let time = new Date(new Date(1970,1,1).getTime() + n * 60000).toString().substr(16,5);
    return time.replace(":", "").split("").reduce((a,b) => { return (+a)+(+b) })
}

module.exports = {lateRide};
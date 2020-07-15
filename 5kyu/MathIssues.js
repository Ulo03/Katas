// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? 
//We can assure, that only non-negative numbers are passed as arguments. 
//So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
// Here is a list of functions, we need:
// Math.round()
// Math.ceil()
// Math.floor()

MyMath = {

    round: function(x) {
        return (x - parseInt(x) >= 0.5) ? parseInt(x) + 1 : parseInt(x) ;
    },
    ceil: function(x) {
        return (parseInt(x) === x) ? x : parseInt(x) + 1;
    },
    floor: function(x) {
        return parseInt(x);
    }

};

console.log(MyMath.round(5.3) == Math.round(5.3));
console.log(MyMath.ceil(5.1) == Math.ceil(5.1));
console.log(MyMath.floor(5.8) == Math.floor(5.8));
console.log(MyMath.round(), Math.round())
// In this kata you are given a string for example:
// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.
// The example above would return:
// "exampleexample"

function removeParentheses(s){
    return s.replace(/\(.*\)|\[.*\]|\{.*\}/g, "");
}

console.log(removeParentheses("foo(test(string))bar") == "foobar"       );
console.log(removeParentheses("te[s]st_str(i)in{gg}g") == "test_string" );
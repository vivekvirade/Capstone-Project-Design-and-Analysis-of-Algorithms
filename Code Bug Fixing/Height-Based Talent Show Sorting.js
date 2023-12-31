//Code with error(s):
var sortPeople = function(names, heights) {
    let length = heights.length();
    let map = new Map();
    for(let i=0; i<=length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);
    let res = [];
    for(let height of heights){
        res.push(map.get(height));
    }
    return res;
};
//Correct Code
var sortPeople = function(names, heights) {
    let length = heights.length;
    let map = new Map();

    for (let i = 0; i < length; i++) {
        map.set(heights[i], names[i]);
    }

    heights.sort((a, b) => b - a);

    let res = [];
    for (let height of heights) {
        res.push(map.get(height));
    }

    return res;
};

//There are a few issues in your code. Let's correct them:

//The length property of an array does not require parentheses, so change heights.length() to heights.length.
//The loop condition should be i < length instead of i <= length.
//The map should be sorted by keys (heights) in descending order, so change heights.sort((a,b) => b-a) to heights.sort((a, b) => b - a).
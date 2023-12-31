//Code with error(s):
var minAddToMakeValid = function(s) {
    let open = 0, close = 0;
    
    for(let c of s) {
        if(c === '(') open++;
        else if(open) close++;
        else open--;
    }
    return open + close;
};
//Corrected code
var minAddToMakeValid = function(s) {
    let open = 0, close = 0;

    for (let c of s) {
        if (c === '(') {
            open++;
        } else if (open) {
            close++;
            open--;
        } else {
            open++;
        }
    }

    return open + close;
};
//If an opening parenthesis is encountered, increment the open counter.
//If a closing parenthesis is encountered and there is a matching opening parenthesis (open is not zero), increment the close counter and decrement the open counter.
//If a closing parenthesis is encountered and there is no matching opening parenthesis, increment the open counter.
const LINEBREAK = "_________________________________________________________________________________________________________________________\n";
const _ = require('underscore');


_.times(4, function() { console.log("Major"); });


/* Functions as Units of Abstraction */

function fail(thing) {
    throw new Error(thing);
}

function warn(thing) {
    console.log(["WARNING:", thing].join(' '));
}

function note(thing) {
    console.log(["NOTE:", thing].join(' '));
}


/* Functions as Units of Behavior */

var letters = ['a', 'b', 'c'];

console.log(letters[1]);
//=> 'b'

function isIndexed(data) {
    return _.isArray(data) || _.isString(data);
}


function nth(a, index) {
    if (!_.isNumber(index)) fail("Expected a number as the index");
    if (!isIndexed(a)) fail("Not supported on non-indexed type");
    if ((index < 0) || (index > a.length - 1))
    fail("Index value is out of bounds");
    return a[index];
}


console.log(nth(letters, 1));
//=> 'b'

var a = [2, 3, -1, -6, 0, -108, 42, 10];

console.log(a);

a.sort(function(x,y) {
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
});

console.log(a);
console.log(LINEBREAK);
//=> [-108, -6, -1, 0, 2, 3, 10, 42]

console.log(LINEBREAK);
var withoutTrim = "   Hola!   ";
var withTrim = withoutTrim.trim();

console.log(withoutTrim+"\n"+withTrim);

console.log(LINEBREAK);

function lameCSV(str) {

    return _.reduce(
        
        /* Param #1 - List*/
        
        str.split("\n"), /* returns  [ 'name,age,hair' , 'Merble,35,red' , 'Bob,64,blonde' ]*/

        /* Param #2 - Iterator*/
        function(table, row) { /* returns [ [ 'name', 'age', 'hair' ] , [ 'Merble', '35', 'red' ] , [ 'Bob', '64', 'blonde' ] ]*/

            table.push(

                _.map(
                    row.split(","),

                    function(c) { 
                        return c.trim();
                    }
                )

            );

            return table;
        },

        /* Param #3 */
        []

    );
}

var testText = "name,age,hair\nMerble,35,red\nBob,64,blonde"

var peopleTable = lameCSV(testText);
console.log(peopleTable);
console.log(LINEBREAK);


var array1 = [1,2,3,4]

var sum = array1.reduce((prev,curr)=>(prev+curr));


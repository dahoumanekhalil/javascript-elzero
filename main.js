// datatypes{
console.log(typeof("text"));//............................... // string
console.log(typeof(5000));//................................. // number
console.log(typeof([1,"text"]));//........................... // array
console.log(typeof({name: "text", age: 24}));//.............. // object
console.log(typeof(true));//................................. // boolean
console.log(typeof(undefind));//............................. // undefind
console.log(typeof(null));//................................. // null
// }

document.write("<h1>hello, world!.</h1>");//................. //to create new Element(tag)
document.createElement("h1");//.............................. //to create new element(tag)
document.querySelector("h1");//.............................. //to select element by ID or CLASS or TAG
style;//..................................................... //to make style to element

// console {
    // proparties[log(), clear(), error(), table(), group(), groupEnd()]
// }

events (onchange,onclick,onmouseover,onmouseout,onkeydown,onload)

Objects(
    window
    /*{
        properties [closed, console, defaultStatus, document, frameElement, frames, history, innerHeight, innerWidth, length,   localStorage, location, name, navigator, opener, outerHeight, outerWidth, pageXOffser, pageYOffser, parent, screen, screenLeft, screen Top, screenX, screenY, sessionStorage, scrollX, scrollY, self, status, top];
        object methods [alert(), atob(), blur(), btoa(), clearInterval(), clearTimeout(),
        closed(), confirm(), focus(), getComputedStyle(), getSelection(), matchMedia(), moveBy(), moveTo(), open(), print(), prompt(), print(), requestAnimationFrame(), resizeBy(), resizeTo(), scroll(), scrollBy(), scrollTo(), setInterval(), setTimeout(), stop(), alert()]
    }*/
)

// navigator.appName  to detect the client's browser name 

// math [
    // number methods {
        console.log((100).toString()); //to change type of number to string 
        console.log(100.10.toString()); //to change type of number to string
        console.log(100.554555.toFixed(2)); //to round number with 2 numbers after point
        console.log(parseInt("100 test")); //to read integer number and ignore other things 
        console.log(parseFloat("100.500 test")); //to read float number and ignore other things
        console.log(Number.isInteger(110)); //to check if that number or not
        console.log(Number.isNaN(100 / test)); //to check if that NaN or not
    // }
    
    // math object {
        console.log(round(99.5)); //to round the number
        console.log(Math.ceil(99.2)); //to round number to max number 
        console.log(Math.floor(99.9)); //to round number to min number 
        console.log(Math.min(10, 20, 100, -100, 90)); //to get min number from that numbers 
        console.log(Math.max(10, 20, 100, -100, 90)); // to get max number from that numbers
        console.log(Math.pow(2,4)); //power number of 2 (2^4)
        console.log(Math.random()); //to get random number
        console.log(Math.trunc(99.5)); //to delet that numbers after point its look like floor
    // }
// ]

// string methods [
    var name2 = " name "; 
/*[]*/    console.log(name2[1]) // to get index 1 
/*[]*/    console.log(name2.charAt(3)); // to see lingth or number of index 3 
/*[]*/    console.log(name2.length); // to see length of variable 
/*[]*/    console.log(name2.trim()); // to make variable without spaces
/*[]*/    console.log(name2.toUpperCase()); // to make all character upper
/*[]*/    console.log(name2.toLowerCase()); // to make all character lower
/*[]*/    console.log(name2.trim().charAt(3).toUpperCase()); // to mix all preparties

/*[28]*/console.log(name2.indexOf("")); //("a",2); for cherch for something from index
/*[28]*/console.log(name2.lastIndexOf("m")); //("a",2);for cherch for something from index and start from last index
/*[28]*/console.log(name2.split("|",2)); // to separet all value the separitor is (|)
/*[28]*/console.log(name2.slice(2,4)); //(-5, -8); to cut index between that numbers
/*[28]*/console.log(name2.repeat(2)); // to repeat that value
/*[28]*/console.log(name2.replace("name", "khalil")); // to replacing caracter with other caracter 

/*[29]*/console.log(name2.substring(2,6)); //(-7,-3); to cut index between that numbers
/*[29]*/console.log(name2.substr(6,2)); // to cut  2 indexes from index 6 
/*[29]*/console.log(name2.startsWith("n",2)); // is that variable (name2) start with taht value (n) and index of start looking is 2
/*[29]*/console.log(name2.endsWith("n",2)); // is that variable (name2) end with taht value (n) and index of end looking is 2

let arr = ["khalil" ,"mohamed" , "dahoiumane" , "bodiaf"] 

/*[40]*/Array.isArray(arr)  //to know if that (arr) is array or not 

/*[42]*/arr.unshift("saif","ferhat")  // for add indexes in front of array 
/*[42]*/arr.push("abdelrahim","abdellah") // for add indexes in the end of array
/*[42]*/arr.shift()   // for delete index from front of array
/*[42]*/arr.pop()     // for delete index from end of array
//to save that name what i delete in var i should use that methode
/*[42]*/let deleteName = arr.pop()  //same thing with shift

/*[43]*/arr.includes("mohamed");    //for search for mohamed 

/*[44]*/arr.sort();     //for sorting array
/*[44]*/arr.reverse();  // for reversing array

/*[45]*/arr.splice(1,2,"chihab","hbabo")    // start from index 1 delete 2 indexes and write chihabe and hbabo

/*[46]*/arr.concant("aymen", "ismail")  //for concat with other arrays or adding other indexes
/*[46]*/arr.join("|")   // to make all array like string and separet between them with | its look like split

//  loops
/*[51]*/mainloop: for(let i = 0; i < 3; i++){
/*[51]*/    nestedLoop: for(let j = 0; j < 2;j++){
/*[51]*/        break;      //break nestedLoop;     // for break your loop (go out from loop)
/*[51]*/continue;   //continue nestedLoop;  // for skip this step from loop
/*[51]*/}}

/*[59]*/function khalil(...parameters) {
/*[59]*/    console.log(`hello ${parameters}`);
/*[59]*/}

/*[64]*/let test = function(...parameters){
/*[64]*/    return parameters;
/*[64]*/}

/*[66]*/let fun = (...parameters) => {
/*[66]*/return parameters;
/*[66]*/}


/*[66]*/ this //=> this mean this element
/*[66]*/classList.add("active"); // to add class to this element
/*[66]*/


// ]

/* operators  {
[31] comparison operators{
[31]    ==      equal
[31]    !=      not equal
[31]    ===     identical
[31]    !==     not identical
[31]    >       larger than
[31]    >=      larger than or equal
[31]    <       smaller than
[31]    <=      smaller than or equal
    }

[32] logical operators {
[32]    !       NOT
[32]    &&      AND
[32]    ||      OR
    }
[36]    ??      nullish coalescing operator
}*/

/* conditional
[33] control flow (if conditional) {
[33]    if
[33]    else if
[33]    else
[33]    if() { } else if() { } else { }

[35] conditional Ternary {
[35]    age < 20 ? console.log("so young") : age >= 20 && age < 50 ? console.log("normale age"):console.log("so old");
[35]    age < 20 
[35]    ? console.log("so young") 
[35]    : age >= 20 && age < 50 
[35]    ? console.log("normale age")
[35]    :console.log("so old");
    }}

[36]    logical or ||
[36]    nullish coalescing operator ??

[37]    switch (day) {
[37]            case 1:
[37]                break;
[37]            case 2:
[37]                break; 
[37]            default:
[37]                break;}

[71]    higher order functions - map (MAP){
[71]    Map (method creates a new array)
[71]    syntex => map(callBackFunction(Element, Index, Array) {}, thisArg)
[71]    Element => the current element being processed in the array
[71]    index => the index of the current element being processed iin the array
[71]    array => the current array
[71]
[71]    let mixFilter = mix.split("").map(function(num) {
[71]            return num * num;
[71]        }).join("")
[71]    }

[73]    filter (FILTER) {
[73]    filter method creates a new array
[73]    with all elements that pass the test implemented by the provided function
[73]    syntex filter(callBackFunction(Element, Index, Array) { }, thisArg)
[73]    Element => the current element being processed in the array
[73]    index => the index of the current element being processed iin the array
[73]    array => the current array
[73]
[73]    let mixFilter = mix.split("").filter(function(num) {
[73]            // return !isNaN(parseInt(num));
[73]            return Number.isInteger(parseInt(num));
[73]        }).join("")
[73]    }


[74]  mixing between map and filter 
[74]    let mix = "A13BS2ZX";
[74]    let mixFilter = mix.split("").filter(function(num) {
[74]        // return !isNaN(parseInt(num));
[74]        return Number.isInteger(parseInt(num));
[74]    }).map(function(num) {
[74]        return num * num;
[74]    }).join("")
[74]
[74]    console.log(mixFilter)

[75]    reduce
[75]    method executes a reducer function on each element of the array 
[75]    resulting in a single output value.
[75]
[75]    sentax
[75]    reduce (callBackFunc(Accumulator, current val, current index, source array) {} , initialvalue)
[75]    - accumulator => the accumulated value preiously returned in the last invocation
[75]    - current val => the current element being processed in the array
[75]    - index => the index of the current element being processed in the array 
[75]        starts from index 0 if an initialvalue is provided
[75]        otherwise, it start from index 1.
[75]    - array => the current array

[75]    let nums = [10,20,15,30];
[75]    let add = nums.reduce(function ( acc, current, index, arr) {
[75]        console.log(`acc => ${acc}`);
[75]        console.log(`current element => ${current}`);
[75]        console.log(`current element index => ${index}`);
[75]        console.log(`array => ${arr}`);
[75]        console.log(acc+ current);
[75]        return acc + current;
[75]    }, 5);
[75]    console.log(add);

[77]    forEach
[77]    method executes a provided function once for each array element 
[77]    syntex forEach(callBackFunction(element, index, array) {}, thisArg)
[77]    - element => the current element being processed in the array
[77]    - index => the index of the current element being processed in the array
[77]    - array => the current array
[77]    note
[77]    - doesnt return anything [undefined]
[77]    - break will not break the loop
[77]    let allLi = document.querySelectorAll("ul li");
[77]    allLi.forEach(function(ele){
[77]    ele.oneclick = function (){
[77]    console.log(this)
[77]    };
[77]    });


[128]   Array.from(iterable, mapfunction, this) => working with variable, string numbers, set, using the map function, arrow function, shorten the method + use arguments
[128]   Array.from("") => to make var in new array like >> osama => ["o","s","a","m","a"]
[128]   Array.from("", function (n) {})
[128]   Array.from ("", (n) => n + n)
[128]   let arr = []
[128]   let newSet = new set(iterable)
[128]   Array.from(newSet) => to make newSet in array
[128]   function testargs() {return arguments;} => to make it as arguments
[128]   function testargs() {return Array.from(arguments)}; => tomake arguments as array
[128]   testargs("osama","ahmed","sayed") => to make arguments as array
[128]   console.log([...new Set(myArray)]) => to make (Set) myArray in array 

[129]   Array.copyWithin(target, start(optional), end(optional)) => copy part of an array to another location in the same array

[130]   Array.some(callbackfunctin (element, index, array), this argument) => check if element exists in array or not 
[130]   when callbackfucntion be back true everything with stop and it will return true and will ignore all other results, it work with arrays 
[130]   let checkNumber = arr.some(function (e) {
[130]   return e >= this.min && e <= this.max;
[130]   }, object) => object = this    

[131]   Array.every(callbackfunctin(element,index,array),this argument) => check if cundition of function true with all elements in array or not if work it will return true if not it will retrurn false
[131]   callbackfunctin => functin to run on every element on the array
[131]   when callbackfucntion be back true everything with stop and it will return true and will ignore all other results, it work with arrays 
[131]   when callbackfunctin return true on all elements in array array.every will return true
[131]   console.log(Array.from(Object.keys(obj),(e) => +e)) => to make keys of object in array and make values of array as numbers
[131]   console.log(Object.keys(obj).map((e) => +e)) => to make keys of object in array and make values of array as numbers

[132]   spread operator => ...iterable
[132]   ..."osama" => o s a m a
[132]   [..."osama"] => to make osama in array = ["o","s","a","m","a"]
[132]   [...arr1,...arr2] => to concat arrays
[132]   {...obj1, ...obj2} => to concat objects

[79]    objects {
[79]    let test = "age";
[79]
[79]    let user = {
[79]        properties
[79]        name: "khalil",
[79]        age: 24,
[79]        "living country": "algeria",
[79]        methods
[79]        talk: function() {
[79]            return `hello`;argum
[79]        },
[79]    };
[79]
[79]    console.log(user.name);
[79]    console.log(user.talk());


[80]console.log(user["living country"]);
[80]console.log(user[test]);

[81]    nested object and trainings on objects 
[82]    create new keyword => new Object({}); 
}

*/


    // DOM Document Object MODEL
    document.getElementById("id here");
    document.getElementsByTagName("tag name here");
    document.getElementsByClassName("name of class here");
    document.querySelector("your query is take the first element")
    document.querySelectorAll("your query's")
    document.getElementsByName("attribute of (name)")


    /* parameters {
        document.getElementById("").innerHTML => to edit value of that element
        .textContent => to get just text value
[89]    .createElement("div"); => to create new element like dive 
[89]    .className =("name"); => to create class to that element
[89]    .createTextNode("node text") => new text to edit it in future or add it where you want 
[89]    .createComment("write your comment here") => to create new comment 
[89]    .appendChild() => to make element inside element
[91]    .children => to get all elements inside that element
[91]    .childNodes => to get all elements with textes and everything inside that element
[91]    .firstChild => to get first child (element or comment or text)
[91]    .lastChild => to get last child (element or comment or text)
[91]    .firstElementChild => to get first element inside that element
[91]    .lastElementChild => to get last element inside that element

    Element.[
        {
            create attribute("") => to create new attribute
            setAttribute("attribute","value") => to create or set attribute to this value
            setAttributeNode("alt") => to create new empty attribute for edit it in the future 
            getAttribute("attribute") => to get attribute
            attribute("") => to get all attributes of that element
            hasAttribute("") => that element have attribute?
            hasAttributes("must write attribute here") => that element have any attribute? 
            removeAttribute("") => delete attribute from element
        }
        
    ]
}*/

/*
[92]DOM [events]{
    [92]    onclick
    [92]    oncontextmenu
    [92]    onmouseenter
    [92]    onmouseleave
    [92]    onload
    [92]    onscroll
    [92]    onresize
    [92]    onfocus
    [92]    onblur
    [92]    onsubmit
}

[93]        preventDefault(); => to stop doing default function (rolls)

events simulation
[94]    click   click simulation
[94]    focus   focus simulation
[94]    blur    blur simulation


[93] validate form practice 
[93] prevent default

            class list 
[95]    -classList => to get all classes in that element
[95]    -- length => to get length of class in that element
[95]    -- contains("") => to see if that class is there or not (boolean value)
[95]    -- item("") => to get index of calss in that element
[95]    -- add("") => add one class or more to taht element
[95]    -- remove("") => remove one class or more to that element
[95]    -- toggle => if we dont have that class he will add it if we have that class he will remove it

            css
[96]    style.color = "red" => to create property style make or set style (in that line we use color to explain how to use it)
[96]    style.cssText = "css text" => to use css text like normal 
[96]    removeProperty(properyName) => to remove property from styling
[96]    setProperty("","","") => setProperty(propertyName,value,priority) to create property style
[96]    document.styleSheets[].rules[].style.removeProperty("") => to remove property from file css in browser
[96]    document.styleSheets[].rules[].style.setProperty("") => to set property from file css in browser

            deal with elements
[97]    before("") => to set element before element
[97]    after("") => to set element after element
[97]    append("") => to set element in the end of the element
[97]    prepend("") => to set element in th start of the element
[97]    remove() => to remove element from DOM

            Traversing
[98]    nextSibling => to get next element comments or any thing 
[98]    nextElementSibling => to get next element
[98]    previousSibling => to get previous element comments or any thing 
[98]    previousElementSibling => to get previous element
[98]    parentElement => to get parents of that element

            Cloning
[99]    cloneNode() => to copy element if you let () empty or you write false thats mean he weill copy just elemnt without subelement iside that element but if you write true he will copy everything inside that element

            Add Event Listener
[100]   addEventListener("",{}) => to add events with addEventListener
[100]   removeEventListener() => to remove (addEventListener)
[100]   target => its mean the goal (الهدف او المستهدف)
*/

/*
[102] BOM Browser Object Model

[103]   alert("message") => to make alert with ok button
[103]   confirm("message") => to make confirm window its look like alert but with 2 buttons and give you back (true or false  its a boolean value)
[103]   prompt("message") => to make prompt window its look like alert but with input to write and give you back answer

[104]   setTimeout(function,millseconds,...parameters) => to make time fo do function after (millseconds) (wait until that (millseconds) and do that function)
[104]   clearTimeout(var) => to make setTimeout() stop and var is name of setTimeout with var its look like that {let var = setTimeout()}

[105]   setInterval(function, millseconds,...parameters) => to make counter every (millseconds) to that function
[105]   clearInterval(var) => to make setInterval() stop and var is name of setInterval with var its look like that {let var = setInterval()}

[106]   -location
[106]   --href [URL || HASH || File || Mail] => to get all url where im now
[106]   --host => to get host of url where im now 
[106]   --hash => to get hash of url where im now 
[106]   --protocol => to get protocol of url where im now 
[106]   --reload() => to reload page
[106]   --replace() => to go to url without save site where i was in hestory 
[106]   --assign() => to go to url with save site where i was in hestory

[107]   -open(url[opt], window name or target attirbute [opt], win features, history[opt]) to open new window (new tab or in same tab)
[107]   -close() => can close just tabs who opened by js with (open())
        features
[107]   --width = number withoutpx
[107]   --height = num
[107]   --left = num
[107]   --top = num

[108]   -hestory
[108]   --length => to know how many pages on hestory of back list
[108]   --go() => to go position in back list in browser like (back with (-) or forward with (+))
[108]   --back()
[108]   --forward()

[109]   stop() => to srop loading
[109]   print() => to print window
[109]   focus() => to focus on window
[109]   scrollto(x,y,options) => to scrolling window with x,y values support with safary { for example => window.scrollTo({left:500, top: 200,behavior:"smooth"})}
[109]   scroll(x,y,options) => to scrolling window with x,y values not support with safary
[109]   scrollBy(x,y,option) => to scrolling window with x,y values from your possition 

[111]   -localStorage => to use locale storage 
[111]   --setItem('','') => to set item in locale storage
[111]   --getItem() => to get item from locale storage
[111]   --removeItem() => to remove item from locale storage
[111]   --clear => to clear all you locale storage
[111]   --key() => to get item from locale storage by index

                for example to use localStorage with orher ways
[111]   - - -window.localStorage.key = val => to set new localStorage
[111]   - - -window.localStorage['key'] = val => to set new localStorage
[111]   - - -window.localStorage.key
[111]   - - -window.localStorage['key']
[111]   - - -window.localStorage.removeItem("key")
[111]   - - -window.localStorage.removeItem("key") 

[112]   data-val in html => dataset in javascript

[113]   -sessionStorage => to use session storage 
[113]   --setItem('','') => to set item in session storage
[113]   --getItem() => to get item from session storage
[113]   --removeItem() => to remove item from session storage
[113]   --clear => to clear all you session storage
[113]   --key() => to get item from session storage by index
                for example to use sessionStorage with orher ways
[113]   - - -window.sessionStorage.key = val => to set new session storage
[113]   - - -window.sessionStorage['key'] = val => to set new session storage
[113]   - - -window.sessionStorage.key
[113]   - - -window.sessionStorage['key']
[113]   - - -window.sessionStorage.removeItem("key")
[113]   - - -window.sessionStorage.removeItem("key") 

*/

/*
[115]   let friends = ["1", "2", "3", ["4", "5", ["6", "7"]]]
[115]   let [a, b, c, d] = friends => a = "1"; b = "2"; c = "3"; d = "4";

[116]   let [, , , [a , , [, b]]] = friends

[117]  for swapping variables
[117]   [a , b] = [b , a]

[118]   const user = {
[118]   name: "test",
[118]   age: 118,
[118]   from: "algeria",
[118]   job: "frontEnd"
[118]   }

[118]   ({a, b, c, d} = user) => بالترتيب 
[118]   const {name, age, job} = user; => بالاسم وليس بالترتيب

[119]   to rename variable in destructuring 
[119]   const {name: a, age , from : b, job: c} = user
[119]   name of new vaiables is [a, b, c] and you can use the reall names [name, age, from, job]

[123]   -set([]) => to give you unique values and delete reppete values
[123]   --size => to know size of set
[123]   --add() => to add new value to set
[123]   --delete() => to delete value from set
[123]   --clear() => to clear set (delete all values)
[123]   --has(val) => if this set has this value (val) ?

[124]   -weakSet({}) => working with just objects 
[124]   --add() => to add new object to weakSet
[124]   --constructor
[124]   --delete() => to delete object from weakSet
[124]   --has() => this weakSet has this object ? 

[125]   -Map() => its look like object you can with map set any key you want to value
[125]   --set( , ) => to set new value inside map 
[125]   --size => size of map
[125]   Object.create(null); => to create new object with null propeties
[125]   new Map() => to create new object with null propertis

[126]   map methods
[126]   let myMap = new Map([
[126]   [10 , "number"],
[126]   ["name", "string"],
[126]   [function test() {}, "function"]
[126]   ])
[126]   
[126]   --set(key," ") => to create new key in map
[126]   --get(key) => to  get map (by key)
[126]   --size => to get size of map
[126]   --delete() => delete key from map
[126]   --clear() => to clearing map
[126]   --has(key) => if that key inside map or not

[127]   weakMap => weakMap allow garbage collector to do its task but not map
[127]   weakMap => لا تظهر المعلومات المحذوفة من الذاكرة الرام 
[127]   weakMap its work just with objects
[127]   if you will work with memory it delete (work with gabage collector) before so work with weakMap if not work with map same thing with set and weakSet




*/
/*for searching{
    -execution context
    -lexical environment
    window.open window features
    pushState() + replaceState
    weakSet use cases
[125]    object prototype 
}*/


// chartjs
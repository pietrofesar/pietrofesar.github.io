/*
console.log('hello world');

document.write('hello world<br>');


var myVar = 'today'

document.write(`Today is ${myVar}`);

var beginEffect = '<strong>';
var endEffect = '</string>';
var bPara = '<p>';
var ePara = '</p>';
var headingText = '<h1>A Page of Javascript</h1>';
var myIntro = 'Hello, welcome to my Javascript page!';
var linkTag = '<a href="http://www.scripttheweb.com">Link to a site</a>';
var redText = '<span style="color:red">I am so colorful today!</span>';

document.write(headingText);
document.write(beginEffect + myIntro + endEffect);
document.write(`${bPara}${linkTag}${ePara}`);
document.write(bPara + redText + ePara);

*/

console.log('wtf');

var xhr = new XMLHttpRequest();
xhr.onreadystatechange= function() {
    if(xhr.readyState === 4) {
        if((xhr.status >= 200 && xhr.status < 300) || (xhr.status === 304)){
            console.log(xhr.status);
            console.log(xhr.responseText);
            alert(xhr.responseText);
        }
    }
}
xhr.open('get', 'descriptiveWords.txt', true);
xhr.send(null);

console.log('wtf');
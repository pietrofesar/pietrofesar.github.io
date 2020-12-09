/*
// this example is for a single doc
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log('line 4');
        if ((xhr.status >= 200 && xhr.status < 300) || (xhr.status === 304)) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            alert(xhr.responseText);
            document.getElementById('demo').innerHTML = xhr.responseText;
        }
    }
}
console.log('line 13');
xhr.open('get', 'descriptiveWords.txt', true);
xhr.send(null);
*/


// this example is for multiple docs
function loadDoc(url, cFunction) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            console.log('line 4');
            if((xhr.status >= 200 && xhr.status < 300) || (xhr.status === 304)){
                return cFunction(this); 
            }
        }
    };
    xhr.open('get', url, true);
    xhr.send();
}

// function for a doc, define another for another doc
function createList(xhr) {
    var wordList = xhr.responseText.split(' ');
    console.log(wordList);
    return wordList;
}

var descriptiveWords = loadDoc('descriptiveWords.txt', createList);
var thingWords = loadDoc('thingWord.txt', createList);

alert(descriptiveWords);
alert (thingWords);
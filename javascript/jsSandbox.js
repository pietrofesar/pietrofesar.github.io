/*
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



function loadDoc(url, cFunction) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            console.log('line 4');
            if((xhr.status >= 200 && xhr.status < 300) || (xhr.status === 304)){
                cFunction(this); 
            }
        }
    };
    xhr.open('get', url, true);
    xhr.send();
}

function myFunction(xhr) {
  document.getElementById('demo').innerHTML = xhr.responseText;
}

loadDoc('descriptiveWords.txt', myFunction);
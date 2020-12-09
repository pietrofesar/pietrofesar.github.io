var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log('line 32');
        if((xhr.status >= 200 && xhr.status < 300) || (xhr.status === 304)){
            console.log(xhr.status);
            console.log(xhr.responseText);
            alert(xhr.responseText);
            document.getElementById('demo').innerHTML = xhr.responseText;
        }
    }
}
console.log('line 41');
xhr.open('get','descriptiveWords.txt', true);
xhr.send(null);
console.log('line 16');
console.log(xhr.responseText);

document.addEventListener('keydown', logKey);

function logKey(){
    document.querySelector('#demo').innerHTML='a key was pressed';
}
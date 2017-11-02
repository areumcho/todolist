var button = document.getElementById('btn');


var title = document.getElementById('title');
var list = document.getElementById('list');
var li = document.getElementsByTagName('li');


list.addEventListener('click', activeItem);




function activeItem(event) {
    
    if(event.target.nodeName == 'LI') {
    title.innerHTML = event.target.innerText;
        
    
    for(var i = 0; i <event.target.parentNode.childrent.length; i++) {
        event.target.parentNode.children[i].removeAttribute('class');
    }
        
        event.target.setAttribute('class', 'active');
    }
    

}

// click on the button

button.addEventListener('click', function () {
    var text = prompt('Enter the title');
    list.innerHTML += '<li>' + text + '</li>';
});

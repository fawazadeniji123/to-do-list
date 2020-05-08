var input = document.getElementById("input");
var button = document.getElementById("btn");
var ul = document.querySelector("ul");

const options = {
    display: 'flex',
    bottom: '32px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.2s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();

function clickEvent(){
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "check"
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.classList.add("border");
    input.value = ""; 
};


function keyPressEvent(event){
    if(event.keyCode === 13&&inputLength() > 0){
        clickEvent();
    }
};

function inputLength(){
    return input.value.length;
};

function clickListEvent(){
    if (inputLength() > 0){
        clickEvent();
    }
};

function checkEvent(){
    var li = querySelector("li");
     li.classList.add('done');
};

button.addEventListener("click", clickListEvent);
input.addEventListener("keypress", keyPressEvent);

checkbox.addEventListener("oncheck", checkEvent);



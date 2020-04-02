//creating close button for lists that ar not with the main function
var myList = document.getElementsByTagName("li");
var index;
for(index = 0; index < myList.length; index++) {
    var spanTag = document.createElement("SPAN");
    var someTxt = document.createTextNode("\u00D7");
    spanTag.className = "close";
    spanTag.appendChild(someTxt);
    myList[index].appendChild(spanTag);
}
//closeButton
var closeButton = document.getElementsByClassName("close");

for(i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

function createNewElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById("input").value;
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if(inputValue=='')
        alert("Hey this cannot be empty!");
    else
        document.getElementById("the-ul").appendChild(li);
    document.getElementById("input").value= "";    
    var panTag = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    panTag.className = "close";
    panTag.appendChild(txt);
    li.appendChild(panTag);
    
    //for removing items
    for(i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
var ulList = document.querySelector('ul');
ulList.addEventListener('click',function(event) {
   console.log(event);
    if(event.target.tagName === "LI") {
        event.target.classList.toggle('checked');
    }
});
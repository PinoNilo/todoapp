
    var todos= document.getElementById("todos");
    var tarea = document.getElementById("Texto");
    var nuevaAdd=document.getElementById("add");
    var valortexto=document.getElementById("valortexto");


function anadir(){
    var letras = tarea.value;
    var li=document.createElement("li");
    var p =document.createTextNode(letras);
    li.appendChild(p);
    valortexto.appendChild(li);



}

nuevaAdd.addEventListener("click",anadir);



document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    var item = document.getElementById('userValue').value;  
    var list = document.getElementById('list');
    var node = document.createElement('li');
    var nodeText = document.createTextNode(item);
    var xbtn = document.createElement('button');
    var dbtn = document.createElement('button');
    var lineBreak = document.createElement('br');
    var msg = document.getElementById('error');
         
    if (item == null || item == undefined || item.trim() == "") {
        if (document.getElementById('submit').clicked === false) {
            return false;
        } else {
            msg.textContent = "Add a task first";
            msg.style.visibility = "visible";
            msg.style.color = "red";
        }
    } else {
        msg.style.visibility = "hidden";
        list.style.visibility = 'visible';
                          
        node.style.marginRight = "70px";
        node.style.marginBottom = "15px";
        node.style.display = "inline";  
                        
        node.appendChild(nodeText);
                      
        xbtn.innerText = "x";
        xbtn.style.marginRight = "30px";
        xbtn.style.marginBottom = "10px";
        xbtn.style.padding = "5px";
                        
        xbtn.addEventListener('click', function(e){     
          node.remove();
          xbtn.remove();
          dbtn.remove();
          lineBreak.remove();
        })
                           
        dbtn.innerHTML = "Done!"; 
        dbtn.style.marginBottom = "10px";
        dbtn.style.padding = "5px";
                    
       dbtn.addEventListener('click', function(e){
            node.classList.toggle("showLine"); 
        })
                    
        list.appendChild(node);
        list.appendChild(xbtn);
        list.appendChild(dbtn);
        list.appendChild(lineBreak);
        document.getElementById('userValue').value = "";
    }
});

document.getElementById('clear').addEventListener('click', function(e){
    list.innerHTML= "";
    item = "";
    msg.style.visibility = "hidden";        
});

//Getting refrences
let item = document.getElementById("item");
let addBtn = document.getElementById("add");
let list = document.getElementById("list");
let error = document.querySelector(".error"); 

function addItem() {
    /*let test = item.value;
    console.log("test");*/

    //collect the value
    let val = item.value;
    
    //trim white spave
    val = val.trim();

    //if/else statement
    if (val.length !== 0) {
        
        //gets rid of error message
        error.innerText = null;

        //create list items
        let li = document.createElement("li");

        //add to list
        li.innerText = val;

        //appending the child

        list.appendChild(li);
        
        //access text and override the exsisting value with empty string
        item.value = "";
        //puts the curser back inside the text box
        item.focus();

    } else {
        error.innerText = "Finding it hard to decide? Try our STYLE page for hot new outfits to wear in every occasion."
        
    }

}

addBtn.addEventListener("click", addItem);

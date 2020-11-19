window.addEventListener("load", () =>{
    load();
})

/*Select a element by ID*/

const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
const myInputField = document.getElementById("myInputField")

myHeading.addEventListener("click" ,() => {
    myHeading.style.color = "red";
});

myButton.addEventListener("click" , () => {
    myHeading.style.color = myInputField.value;
});

/*select all elements of the same type*/

const myList = document.getElementsByTagName("li");

for(let a = 0;a < myList.length; a++)
{
    myList[a].style.color = "tomato";
}

/*select all elements of the same class*/

const noColorElements = document.getElementsByClassName("noColor");

for(let a = 0;a < myList.length; a++)
{
    noColorElements[a] = "black";
}

/*select first element that apears*/
/* can select ids, classes, elements */

/*id selector*/
const anyElement = document.querySelector("#noColor");

/*attribute selector*/
const anyElement2 = document.querySelector("[title=label]");

/*select all the first elements that apear*/

const anyElements = document.querySelectorAll("noColor");


const evens = document.querySelectorAll("li:nth-child(even)");

for(let a = 0;a < evens.length; a++)
{
    evens[a].style.backgroundColor = "lightgray";
}

/*-------MORE ELEMENT SELECTION---------*/


myHeading.textContent = "This is a new heading";

/*selecting a element with a certain class*/
const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const button = document.querySelector("button.description");

button.addEventListener("click", () => {
    p.innerHTML = input.value;
});

/*-------STYLING ELEMENTS---------*/
/*-------STYLING ELEMENTS---------*/
/*-------STYLING ELEMENTS---------*/

p.style.color ="blue";

/*--------------------------------*/
/*-CREATE NEW ELEMENTS FROM SCRATCH-*/
/*--------------------------------*/

//wait for the browser to full load then call js
function load(){

    const addItemText = document.querySelector("input.newListText");
    const addItemButton = document.querySelector("button.newListButton");
    const removeItemButton = document.querySelector("button.removeItemButton");
    //REMOVE ELEMENT
    removeItemButton.addEventListener("click", () => {
    
        let ul = document.getElementsByTagName("ul")[0];
        let listItem = document.querySelector("li:last-child");
        /*-Actually remove the element to the page -*/
        ul.removeChild(listItem);
    });
    
    //ADD ELEMENT
    addItemButton.addEventListener("click", () => {
    
        let ul = document.getElementsByTagName("ul")[0];
        let listItem = document.createElement("li");
        listItem.textContent = addItemText.textContent;
    
        /*-Actually add the element to the page -*/
        ul.appendChild(listItem);
        addItemText.value = "";
    });

    const listItem = document.getElementsByTagName("li");

/*     for(let i = 0;i < listItem.length;i++)
    {
        listItem[i].addEventListener("mouseover" ,()=> {
        listItem[i].textContent = listItem[i].textContent.toUpperCase();
        });

        listItem[i].addEventListener("mouseout" ,()=> {
        listItem[i].textContent = listItem[i].textContent.toLowerCase();
        });
    }
 */
    /*--------------------------------*/
    /*-EVENT BUBBLING-*/
    /*--------------------------------*/

    /*get element with a click, usefull for element bubling*/
    document.addEventListener("click", (event)=>{
        console.log(event.target);
    });
}
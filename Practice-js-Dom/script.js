//Q#1: Create a nave bar and change the coloor of it first element to reed?
// Q#2: Creat a table without tbody Now use "view page source "button to  chech whether it has a tbody or not?
// Q#3: Now change the color of first and last element to "green?" 


document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"
 document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color="green"

Array.from(getElementsByTagName("li")).forEach((Element)  =>{
    Element.style.background = "cyan"
})

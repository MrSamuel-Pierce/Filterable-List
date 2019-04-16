// Get user input
var filter = document.querySelector("#filter")
//console.log(filter);

// Add event listener to listen user 
filter.addEventListener("keyup", filterName)

// filter out list depends on the user input
function filterNames()
    //console.log("hello from filterNames");

    // Get value of user input
    var value = filter.value;
    // console.log(value)

 // Get all names in the list
    var names = document.querySelectorAll("li a")
     // console.log(names);  
    
// Loop over names
for(var i=0;i<names.length;i++){

    // Compare names
    if(names[i].innerText.toUpperCase().includes(value.toUpperCase())) {
    names[i].parentElement.style.display="block"
} else {
    names[i].parentElement.style.display="none"
}
}

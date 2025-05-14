var addbutton = document.querySelector(".add-button");
var popupoverlay = document.querySelector(".popup-overlay");
var inside = document.querySelector(".inside");

addbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    inside.style.display = "block";
});

var cancelbutton = document.getElementById('cancel-popup');
cancelbutton.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    inside.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-popup");
var booktitle = document.getElementById("bookholder-input");
var bookauthor = document.getElementById("author");
var description = document.getElementById("description");

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    
    if (!booktitle.value || !bookauthor.value || !description.value) {
        alert("Please fill in all fields.");
        return;
    }


    var div = document.createElement("div");
    div.setAttribute("class", "book-container");


    div.innerHTML = `
        <h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${description.value}</p><br>
        <button class="delete-button"> DELETE</button>
    `;
    
    
    container.append(div);
    
    
    booktitle.value = '';
    bookauthor.value = '';
    description.value = '';

    
    popupoverlay.style.display = "none";
    inside.style.display = "none";

    
    var deleteButton = div.querySelector(".delete-button");
    deleteButton.addEventListener("click", function() {
        div.remove();
    });
});


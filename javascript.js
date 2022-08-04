class Book {  

    constructor (name,author,pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.info = function summary(){
        console.log(`${this.name}` + " by " + `${this.author}` + " is " + `${this.pages}` + " pages");
    }

    };
   

  }

  let myLibrary = [];

  document.getElementById("addBook").addEventListener("click", addBook);
  function addBook () {
    document.querySelector(".popup").classList.add("active"); 
  };

 document.querySelector(".popup .close-btn").addEventListener("click", closeAddBook);
 function closeAddBook () {
  document.querySelector(".popup").classList.remove("active"); 
  };


document.getElementById("Submit").addEventListener("click", displayBook);


function displayBook(){ 
  
     var appendDiv = document.getElementById("append");
     appendDiv.innerHTML = "";

     let bookName = document.getElementById("bookName").value;
     let bookAuthor = document.getElementById("bookAuthor").value;
     let bookPages = document.getElementById("bookPages").value;
     const book1 = myLibrary.push(new Book(bookName,bookAuthor,bookPages))
     console.log(myLibrary);


  for (let i = 0; i < myLibrary.length; i++) {
     
     const para = document.createElement("p");
     const para1 = document.createElement("p");
     const para2 = document.createElement("p");
     const node = document.createTextNode("Name: " + myLibrary[i].name);
     const node1 = document.createTextNode("Author: " + myLibrary[i].author);
     const node2 = document.createTextNode("Pages: " + myLibrary[i].pages);
     para.appendChild(node);
     para1.appendChild(node1);
     para2.appendChild(node2);
     const card = document.createElement("div");
     card.setAttribute("id", "card");
     card.appendChild(para);
     card.appendChild(para1);
     card.appendChild(para2);
     var elem = document.createElement("img");
     elem.setAttribute("src",'img/delete.svg');
     elem.setAttribute("height", "20");
     elem.setAttribute("width", "20");
     elem.setAttribute("alt", "deleteButton");
     card.appendChild(elem);
     let cnt = document.createElement("div");
     cnt.setAttribute("class","container");
     let toggle = document.createElement("div");
     toggle.setAttribute("class", "toggle");
     let toggleBtn = document.createElement("div");
     toggleBtn.setAttribute("class", "toggle-button");
     toggle.appendChild(toggleBtn);
     let texto = document.createElement("div");
     texto.setAttribute("class", "texto");
     cnt.appendChild(toggle);
     cnt.appendChild(texto);
     card.appendChild(cnt);
     appendDiv.appendChild(card);

  } 



};

let toggle = document.querySelector(".toggle");

function animatedToggle(){
    toggle.classList.toggle("active");
}


/*  <div class="container"> 
    <div class="toggle">
      <div class="toggle-button" onclick="animatedToggle()"></div>
    </div>
      <div class="texto"><p>Mark as read</p></div>
  </div> */
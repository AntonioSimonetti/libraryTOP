class Book {  

    constructor (Name,author,pages,read) {
    this.Name = Name;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
 

    };
   

  }

  let myLibrary = [];

  document.getElementById("addBook").addEventListener("click", addBook);   //Addbook button
  function addBook () {
    document.querySelector(".popup").classList.add("active"); 
  };

 document.querySelector(".popup .close-btn").addEventListener("click", closeAddBook); // X button in popup
 function closeAddBook () {
  document.querySelector(".popup").classList.remove("active"); 
  };


document.getElementById("Submit").addEventListener("click", displayBook);


function displayBook(){   //submit
     
     
     const removeDiv = document.querySelectorAll(".card");
     for (let i = 0; i < removeDiv.length; i++) {
       removeDiv[i].remove();
     };

     let Name = document.getElementById("bookName").value;
     let author = document.getElementById("bookAuthor").value;
     let pages = document.getElementById("bookPages").value;
     let read = document.getElementById("bookRead").checked;
     const book1 = myLibrary.push(new Book(Name,author,pages,read)); 
     const appendDiv = document.getElementById("append");

  let index = 0;
    myLibrary.forEach((myLibrarys) => {

      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("id", "card");

      const divContainer = document.createElement("div");
      divContainer.classList.add("divContainer");
      const removeBookButton = document.createElement("img");
      removeBookButton.src = "img/delete.svg";
      removeBookButton.classList.add("remove-book-button");
      removeBookButton.textContent = "X";
      removeBookButton.dataset.linkedArray = index;
      divContainer.appendChild(removeBookButton);


      //card.appendChild(removeBookButton);

      removeBookButton.addEventListener("click", removeBookFromLibrary);

      const readStatusButton = document.createElement("button");
      readStatusButton.classList.add("read-status-button");
      readStatusButton.textContent = "Mark as read";
      readStatusButton.dataset.linkedArray = index;
      divContainer.appendChild(readStatusButton);
      card.appendChild(divContainer);
  
      //card.appendChild(readStatusButton);

      appendDiv.appendChild(card);

      readStatusButton.addEventListener("click", toggleReadStatus);

      function toggleReadStatus() {
        
        let retrieveBookToToggle = readStatusButton.dataset.linkedArray;  
        const indiceToggle = parseInt(retrieveBookToToggle);
        //Book.prototype = Object.create(Book.prototype);
        //const toggleBook = new Book();

        if((myLibrary[indiceToggle].Read) == true) {
          //toggleBook.read = false;
          myLibrary[indiceToggle].Read = false;
        } else if ((myLibrary[indiceToggle].Read) == false) {
          //toggleBook.read = true;
          myLibrary[indiceToggle].Read = true;
      } 
      
      const toggle = card.querySelector("p:last-child");
      toggle.textContent = "Read: " + myLibrary[indiceToggle].Read;


    }

     function removeBookFromLibrary() {
      let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
      
      myLibrary.splice(parseInt(retrieveBookToRemove), 1);
      card.remove();
    };

    for (let key in myLibrarys) {
      console.log(`${key}: ${myLibrarys[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrarys[key]}`;
      card.appendChild(para);
    };

     index++
    });

  } 
 







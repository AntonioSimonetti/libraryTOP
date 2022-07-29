function Book(name, author,pages) {
    this.name = name
    this.author = author
    this.pages = pages
    this.info = function(){
        return `${this.name}` + " by " + `${this.author}` + "is" + `${this.pages}`
         + console.log(Book.info())
    }
  }
const myLibrary=[];
function Book(id,title,author,pages,read_status){
    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read_status=read_status;
    
}

function addBookToLibrary(name,pages,author){
    tmp= new Book(name,ages,author);
    myLibrary.append(tmp);
}

function displayBooks(){
    myLibrary.forEach((element)=>{
        
    })
}

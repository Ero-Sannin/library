const myLibrary=[];
let output=document.querySelector("#output");


function Book(id,title,author,pages,read_status){
    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read_status=read_status; 
}

function addBookToLibrary(title,author,pages,read_status){
    tmp= new Book(title,author,pages,read_status);
    myLibrary.append(tmp);
}

function displayBooks(){
    myLibrary.forEach((element)=>{
        card=document.createElement("div");
        card.setAttribute("class","card");
        for(key in element){
            card.innerText+=`${key}:${element[key]}\n`;
        }

        output.appendChild(card);
    });
        
}




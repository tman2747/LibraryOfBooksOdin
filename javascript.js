let library = []
let libraryId = 0

let form = document.getElementById("myForm")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    title = form.querySelector("#title").value
    author = form.querySelector("#author").value
    pages = form.querySelector("#pages").value
    readStatus = form.querySelector("#readStatus").checked
    addBookToLibrary(new Book(title,author,pages,readStatus))
    renderBooks()
    resetForm()
})

function Book(title,author,pageCount,readStatus)
{
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.readStatus = readStatus
    this.id = null

    this.print = function()
    {
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPage Count: ${this.pageCount}\nRead Status: ${this.readStatus} `)
    }

    this.toggleReadStatus = function()
    {
        this.readStatus = !this.readStatus;
    }
}

let newbook = new Book("1984", "Winsten", 400, true)
let newbook1 = new Book("The Hitchhiker’s Guide to the Galaxy", "Douglas Adams", 400, true)
let newbook2 = new Book("sssss", "Winsten", 400, true)
let newbook3 = new Book("ddddd", "Winsten", 400, true)
let newbook4 = new Book("ffffff", "Winsten", 400, false)

function addBookToLibrary(book)
{
    book.id = libraryId;
    libraryId += 1;
    library.push(book)
}

function resetForm()
{
    form.querySelector("#title").value = ""
    form.querySelector("#author").value = ""
    form.querySelector("#pages").value = ""
    form.querySelector("#readStatus").checked = false
}

addBookToLibrary(newbook)
addBookToLibrary(newbook1)
addBookToLibrary(newbook2)
addBookToLibrary(newbook3)
addBookToLibrary(newbook4)

function createBook(bookInfo)
{
    
    let bookcard = document.createElement("div")
    bookcard.className = "card"
    bookcard.id = bookInfo.id
    let topitems = document.createElement("div")
    topitems.className="top-items"
    let title = document.createElement("div")
    title.innerHTML=`Title: ${bookInfo.title}`
    title.className = 'card-title'
    let author = document.createElement("div")
    author.innerHTML=`Author: ${bookInfo.author}`
    author.className = 'card-author'
    let pageCount = document.createElement("div")
    pageCount.innerHTML=`Page Count: ${bookInfo.pageCount}`
    pageCount.className = 'card-page-count'
    let readStatus = document.createElement("div")
    readStatus.innerHTML=`Read status: ${bookInfo.readStatus}`
    readStatus.className = "card-read-status"
    topitems.appendChild(title)
    topitems.appendChild(author)
    topitems.appendChild(pageCount)
    topitems.appendChild(readStatus)
    bookcard.appendChild(topitems)
    let buttondiv = document.createElement("div")
    buttondiv.className = "card-buttons"
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("click", ()=>{
        deleteBook(bookInfo.id)
    })

    


    let toggleReadStatus = document.createElement("button")
    toggleReadStatus.innerHTML = "Read / Unread "
    toggleReadStatus.addEventListener("click", ()=>{
        bookInfo.toggleReadStatus()
        renderBooks()
    })

    
    buttondiv.appendChild(toggleReadStatus)    
    buttondiv.appendChild(removeButton)
    bookcard.appendChild(buttondiv)
    return bookcard
}

function deleteBook(id)
{
    index = library.findIndex(book => book.id === id)
    if (index == -1)
    {
        console.log("You tried deleting a id that doesnt exisit check book indexing. this should not happpen")
        return
    }
    library.splice(index,1)
    console.log(index)
    renderBooks()
}

function renderBooks()
{
    cardContainer = document.getElementsByClassName("card-container")[0]
    cardContainer.innerHTML = ""
    library.forEach(book => {
        cardContainer.appendChild(createBook(book))
    })
}
renderBooks()

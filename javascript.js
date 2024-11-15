let library = []
let libraryId = 0

let form = document.getElementById("myForm")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    title = form.querySelector("#title").value
    author = form.querySelector("#author").value
    pages = form.querySelector("#pages").value
    readStatus = form.querySelector("#readStatus").checked
    addBookToLibrary(new Book(title,author,pages,readStatus)) // fix it is always true right now? something wrong with readstatus quary seledtor
    renderBooks()
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
}

let newbook = new Book("1984", "Winsten", 400, true)
let newbook1 = new Book("asdfasdf", "Winsten", 400, true)
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
    console.log(new FormData(form))
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
    let title = document.createElement("div")
    title.innerHTML=`Title: ${bookInfo.title}`
    title.className = 'card-title'
    let author = document.createElement("div")
    author.innerHTML=`Author: ${bookInfo.author}`
    let pageCount = document.createElement("div")
    pageCount.innerHTML=`Page Count: ${bookInfo.pageCount}`
    let readStatus = document.createElement("div")
    readStatus.innerHTML=`Read status: ${bookInfo.readStatus}`
    bookcard.appendChild(title)
    bookcard.appendChild(author)
    bookcard.appendChild(pageCount)
    bookcard.appendChild(readStatus)
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

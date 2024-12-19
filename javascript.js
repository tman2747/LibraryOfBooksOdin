class Book
{
    constructor(title, author, pageCount, readStatus)
    {
        this.title = title
        this.author = author
        this.pageCount = pageCount
        this.readStatus = readStatus
        this.id = null
    }

    print()
    {
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPage Count: ${this.pageCount}\nRead Status: ${this.readStatus} `)
    }
    toggleReadStatus()
    {
        this.readStatus = !this.readStatus;
    }

}
class library
{
    library = []
    libraryId = 0
    constructor()
    {

    }
    addBookToLibrary(book)
    {
        book.id = this.libraryId;
        this.libraryId += 1;
        this.library.push(book)
    }

    resetForm()
    {
        form.querySelector("#title").value = ""
        form.querySelector("#author").value = ""
        form.querySelector("#pages").value = ""
        form.querySelector("#readStatus").checked = false
    }
    deleteBook(id)
    {
        let index = this.library.findIndex(book => book.id === id)
        if (index == -1)
        {
            console.log("You tried deleting a id that doesnt exisit check book indexing. this should not happpen")
            return
        }
        this.library.splice(index, 1)
        console.log(index)
        this.renderBooks()
    }
    createBook(bookInfo)
    {

        let bookcard = document.createElement("div")
        bookcard.className = "card"
        bookcard.id = bookInfo.id
        let topitems = document.createElement("div")
        topitems.className = "top-items"
        let title = document.createElement("div")
        title.innerHTML = `Title: ${bookInfo.title}`
        title.className = 'card-title'
        let author = document.createElement("div")
        author.innerHTML = `Author: ${bookInfo.author}`
        author.className = 'card-author'
        let pageCount = document.createElement("div")
        pageCount.innerHTML = `Page Count: ${bookInfo.pageCount}`
        pageCount.className = 'card-page-count'
        let readStatus = document.createElement("div")
        readStatus.innerHTML = `Read status: ${bookInfo.readStatus}`
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
        removeButton.addEventListener("click", () =>
        {
            this.deleteBook(bookInfo.id)
        })




        let toggleReadStatus = document.createElement("button")
        toggleReadStatus.innerHTML = "Read / Unread "
        toggleReadStatus.addEventListener("click", () =>
        {
            bookInfo.toggleReadStatus()
            this.renderBooks()
        })


        buttondiv.appendChild(toggleReadStatus)
        buttondiv.appendChild(removeButton)
        bookcard.appendChild(buttondiv)
        return bookcard
    }
    renderBooks()
    {
        let cardContainer = document.getElementsByClassName("card-container")[0]
        cardContainer.innerHTML = ""
        this.library.forEach(book =>
        {
            cardContainer.appendChild(this.createBook(book))
        })
    }

}


let mylibrary = new library

let newbook = new Book("1984", "George Orwell", 300, true)
let newbook1 = new Book("The Hitchhiker’s Guide to the Galaxy", "Douglas Adams", 400, true)
let newbook2 = new Book("Consider Phlebas", "Iain Banks", 250, true)

console.log(newbook2.title)
mylibrary.addBookToLibrary(newbook)
mylibrary.addBookToLibrary(newbook1)
mylibrary.addBookToLibrary(newbook2)


let form = document.getElementById("myForm")
form.addEventListener("submit", (e) =>
{
    e.preventDefault();
    title = form.querySelector("#title").value
    author = form.querySelector("#author").value
    pages = form.querySelector("#pages").value
    readStatus = form.querySelector("#readStatus").checked
    mylibrary.addBookToLibrary(new Book(title, author, pages, readStatus))
    mylibrary.renderBooks()
    mylibrary.resetForm()
})

mylibrary.renderBooks()

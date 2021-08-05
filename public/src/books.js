function findAuthorById(authors, id) {
   
   let foundAuthor = authors.find(element => element.id === id);
   return foundAuthor;

}

function findBookById(books, id) {
  let foundBook = books.find(element => element.id === id);
  return foundBook;

}

function partitionBooksByBorrowedStatus(books) {

  
  let array1 = books.filter(book =>  book.borrows[0].returned === false);
  let array2 = books.filter(book =>  book.borrows[0].returned === true);
  return [array1, array2];
}

function createBorrowedObject(borrow, user) {
  return {...borrow,...user};
}

function getBorrowersForBook(book, accounts) {
  let finalArray = [];
  let bookBorrow = book.borrows;
  for (let i = 0 ; i <bookBorrow.length; i++) {
    let user = accounts.find(user => user.id === bookBorrow[i].id);  
    let borrowObject = {...bookBorrow[i],...user};
    finalArray.push(borrowObject);
  }
  return finalArray.slice(0, 10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

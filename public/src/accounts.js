

function findAccountById(accounts, id) {
  let foundAccount = accounts.find(element => element.id === id);
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {

let totalBooks = 0;
for (let item of books) {
  let arrayOfId = item.borrows.map((borrow) => borrow.id);
  for (i = 0; i < arrayOfId.length; i++) {
    if (arrayOfId[i] === account.id) {
      totalBooks++;
    }
  }
}
return totalBooks;

}

function getBooksPossessedByAccount(account, books, authors) {
let accountId = account.id;
let bookCheckouts = books.filter(book => book.borrows[0].id === accountId);
for (let i=0; i < bookCheckouts.length; i++) {
  bookCheckouts[i].author = authors.find(author =>  bookCheckouts[i].authorId === author.id); 
}
  return bookCheckouts;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

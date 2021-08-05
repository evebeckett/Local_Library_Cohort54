function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}


function getBooksBorrowedCount(books) {
  let array = books.filter(book => book.borrows[0].returned === false);
  return array.length;
};

function _sortObjectByValues(obj){
  const keys = Object.keys(obj);
  //console.log(keys);
  return keys.sort((keyA, keyB) => {
    //console.log(obj[keyA],obj[keyB]);
    if (obj[keyA] > obj[keyB]){
      return -1;
    } else if (obj[keyB] > obj [keyA]){
      return 1;
    }
    return 0;
  })
};

  function getMostCommonGenres(books) {
    let countObj = books.reduce((acc, {genre}) => {
      if (acc[genre]) {
        acc[genre]+=1;
      }
      else {
        acc[genre]=1;
      };
      return acc;
    },{});
    let sortedKeys = _sortObjectByValues(countObj);
    //console.log(sortedKeys);
    let sorted = sortedKeys.map((key)=> ({ name:key, count:countObj[key]})).slice(0,5);
    //console.log(sorted);
    return sorted;
  };

function getMostPopularBooks(books) {
  let sortedObj = books.sort(function (a,b) {
    return b.borrows.length - a.borrows.length;
  });
  let topFive = sortedObj.slice(0, 5);
  let newArr = [];
  for (let i = 0; i < topFive.length; i++) {
    newArr.push({name: topFive[i].title, count: topFive[i].borrows.length});
  }
  return newArr;
}

function getMostPopularAuthors(books, authors) {

let newObject = {};
for (let i = 0; i < authors.length; i++) {
  const booksByAuthor = books.filter(book => authors[i].id === book.authorId);
  if (newObject[authors[i].id] === undefined) {
    newObject[authors[i].id] = 0
  }
  for (let j = 0; j < booksByAuthor.length; j++) {
    console.log(booksByAuthor[j])
    newObject[authors[i].id] += booksByAuthor[j].borrows.length      
  }
}
return Object.keys(newObject)
.sort((authorIdA, authorIdB) => newObject[authorIdB] - newObject[authorIdA])
.slice(0, 5)
.map(authorId => {
  const author = authors.find(a => a.id === Number(authorId))
  return {name: author.name.first + " " + author.name.last, count: newObject[authorId]};
})
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

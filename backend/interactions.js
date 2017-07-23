var uploadBookToIPFS = function (bookData) {
    
};

var getAllBooks = function () {
    return new Promise(async (resolve, reject) => resolve([{
        title: "A Clockwork Orange",
        author: "Anthony Burgess",
        date: "198X",
        hash: "abceasyas123"
    }]));
};

module.exports = {
    uploadBookToIPFS: uploadBookToIPFS,
    getAllBooks: getAllBooks
};

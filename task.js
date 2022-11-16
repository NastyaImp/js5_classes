//1 задание. Печатное издание
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
   
    fix() {
        this.state = this.state * 1.5;
        if (this.state < 0) {
            this.state = 0;
        } else if (this.state > 100) {
            this.state = 100;
        }
    }

    set state (state) {
        if (this.state < 0) {
            this._state = 0;
        } else if (this.state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook  extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//2 задание. Библиотека
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
         if (book._state > 30) {          
            this.books.push(book);               
        }
    }

    findBookBy(type, value) {
        for (let key in this.books) {
            for (let i in this.books[key])
            if (i == type && this.books[key][i] == value) {
                return this.books[key];
            } 
        }
        return null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(n => n.name === bookName);
        let deleteBooks = this.books[index];
        if (index !== -1) {
            this.books.splice(index, 1);
            return deleteBooks;
        }

        return null;
    }
}

// //3 задание
// class Student {
//     constructor(name) {
//         this.name = name;
//         this.subjects = [];
//     }

//     addMark(mark, subject) {
      
//         if (student.subjects.length == 0) {
//             const sub = new Subject(subject);  
//             this.subjects.push(sub);  
//             sub.marks.push(mark);   
//             return subject;
//         }
//         for (let i = 0; i < student.subjects.length; i++) {
//             if (student.subjects[i].name == subject) {
//                 this.subjects[i].push(mark);
                
//             } else if (student.subjects[i].name != subject) {
//                 const sub = new Subject(subject);  
//                 this.subjects.push(sub);  
//                 sub.marks.push(mark);   
//                 break;
//             }
            
//         }
       
         
//     }
// }

// class Subject {
//     constructor(name) {
//         this.name = name;
//         this.marks = [];
//     }
    
//     }

 


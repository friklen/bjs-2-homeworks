class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(num) {
		if (num < 0) {
			this._state = 0;
		} else if (num > 100) {
			this._state = 100;
		} else {
			this._state = num;
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
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";

	}
}
class FantasticBook extends Book {
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
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		} else {
			console.log("Книга не добавлена в хранилище из-за состояния");
		}
	}
	findBookBy(type, value) {
		let book = this.books.find((book) => book[type] === value);
		return book !== undefined ? book : null;
	}
	giveBookByName(bookName) {
		let index = this.books.findIndex((book) => book.name === bookName);
		if (index !== -1) {
			return this.books.splice(index, 1)[0];
		} else {
			return null;
		}
	}
}
const fantastic = new FantasticBook(
	"Жюль Верн",
	"Таинственный остров",
	1998,
	350
);
const library = new Library("Библиотека имени А.С.Пушкина");
library.addBook(new NovelBook("Маргарет Митчелл", "Унесенные ветром", 2021, 990));
library.addBook(new FantasticBook("Жюль Верн", "Таинственный остров", 1998, 350));
library.addBook(new DetectiveBook("Эдгар По", "Черный кот", 1919, 270));
library.addBook(new Magazine("Том и Джерри", 2023, 25));

console.log(library.findBookBy("name", "Двадцать тысяч лье под водой")); // null
console.log(library);
console.log(library.findBookBy("releaseDate", 1919)); //"Черный кот"
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
const book = library.giveBookByName("Таинственный остров");
console.log("Количество книг после выдачи: " + library.books.length);
book.state = 25;
book.fix();
console.log(book.state); //37,5;
library.addBook(book);
console.log("Количество книг после возврата: " + library.books.length)
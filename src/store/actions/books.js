export function showBookList(books){
	return{
		type: 'SHOW_BOOK_LIST',
		books
	}
}

export function currentBook(book){
	return{
		type: 'CURRENT_BOOK',
		book
	}
}
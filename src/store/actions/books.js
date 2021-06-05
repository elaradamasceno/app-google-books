export function showBookList(books){
	return{
		type: 'SHOW_BOOK_LIST',
		books
	}
}

export function showPagination(totalItems){
	return{
		type: 'SHOW_PAGINATIOM',
		totalItems
	}
}

export function currentBook(book){
	return{
		type: 'CURRENT_BOOK',
		book
	}
}
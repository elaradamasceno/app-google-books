import { combineReducers } from 'redux';
import books from './books';
import currentBook from './currentBook';
import currentPage from './currentPage';

export default combineReducers({
	books,
	currentBook,
	currentPage
});
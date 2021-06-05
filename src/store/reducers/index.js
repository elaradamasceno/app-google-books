import { combineReducers } from 'redux';
import books from './books';
import currentBook from './currentBook';

export default combineReducers({
	books,
	currentBook
});
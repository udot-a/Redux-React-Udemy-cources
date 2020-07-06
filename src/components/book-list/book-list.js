import React, {Component} from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {withBookstoreService} from "../hoc"
import {compose} from "../../utils";
import {bookAddedToCart, getBooksData} from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className={"book-list"}>
            {
                books.map(book => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCart(book)}
                            />
                        </li>
                    );
                })
            }
        </ul>
    );

}

class BookListContainer extends Component {
    componentDidMount() {
        const {getBooksData, bookstoreService} = this.props;

        getBooksData(bookstoreService);
    }

    render() {
        const {books, loading, error, bookAddedToCart} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return (
                <ErrorIndicator/>
            );
        }

        return <BookList
                    books={books}
                    onAddedToCart={bookAddedToCart}
                />
    }
}

const mapStateToProps = ({ bookState: { books, loading, error } }) => ({
    books,
    loading,
    error
});

const mapDispatchToProps = {
    getBooksData,
    bookAddedToCart
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);



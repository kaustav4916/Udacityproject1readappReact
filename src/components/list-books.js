import React from "react";


class List extends React.Component {
  
  render() {
    // const allBooksItem = this.props.allBooksItem;
    // // const currentlyReading = allBooks.filter(book => book.shelf==='currentlyReading' );
    // const wantToReadItem= allBooksItem.filter(book => book.shelf==='wantToRead');
    // const readItem = allBooksItem.filter(book => book.shelf ==='read');
    // // const none = allBooks.filter(book => book.shelf ==='none');
    return (
      
      <React.Fragment>
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map(book =>(
                        <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                            <div 
                                className="book-cover" 
                                 style={{
                                    width: 128, 
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks.thumbnail}`
                                }}
                            ></div>

                            
                            <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={e=>this.props.changeShelf(book,e.target.value)}>
                                <option  value="move" disabled>Move to...</option>
                                <option  value="currentlyReading">want to open</option>
                                <option  value="wantToRead">Want to readForBooks</option>
                                <option  value="read">readForBooks</option>
                                <option  value="none">None</option>
                                </select>
                            </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default List;

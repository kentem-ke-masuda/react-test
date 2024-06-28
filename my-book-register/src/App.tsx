import { useState } from 'react';
import './App.css';
import FilterableBookTable from './components/filterableBookTable';
import { BookItemModel } from './models';
import BookRegister from './components/bookRegister';
import { v4 as uuidv4 } from 'uuid';

function App() {

  //9784297130589
  //9784873115658

  const [books, setBooks] = useState<BookItemModel[]>([]);

  const handleClickButton = (isbn : string): void => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.totalItems === 0) {
          alert('登録されていない ISBN コードです。');
          return;
        }
        onPostCompleted({
          name: data.items[0].volumeInfo.title,
          isOnLoan: false,
        });
      });
  };

  const onPostCompleted = (postedItem: Omit<BookItemModel, 'id'>): void => {
    setBooks((prev) => [
      ...prev,
      {
        id: uuidv4(),
        ...postedItem,
      },
    ]);
  }

  return (
    <div className="App">
      {/* 第1問：コンポーネントに分割 ↓ ↓ ↓ ↓ ↓ */}
      <BookRegister handleClickButton={handleClickButton} />
      {/* 第1問：コンポーネントに分割 ↑ ↑ ↑ ↑ ↑ ↑ */}
      <hr />
      <FilterableBookTable
        books={books}
        onClickDelete={(id) => {
            const newBooks = books.filter(bookItems=>bookItems.id !== id)
            console.log(newBooks)
            setBooks(newBooks)             
          }
        }
        onClickLendingSwitch={(id) => {
          //mapでつくれるか・・・・
          const newBooks : BookItemModel[] = books.map( (bookItem) => {
            return bookItem.id === id ? { ...bookItem , isOnLoan : !bookItem.isOnLoan} : { ...bookItem}
          })
          setBooks(newBooks)
          }
        }
      />
    </div>
  );
}

export default App;

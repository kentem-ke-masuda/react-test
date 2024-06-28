import { useState } from 'react';
import './App.css';
import FilterableBookTable from './components/filterableBookTable';
import { BookItemModel } from './models';
import BookRegister from './components/bookRegister';

function App() {
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
        id: prev.length.toString(),
        ...postedItem,
      },
    ]);
  }

  return (
    <div className="App">
      {/* 第1問：コンポーネントに分割 ↓ ↓ ↓ ↓ ↓ */}
      <BookRegister handleClickButton={handleClickButton}></BookRegister>
      {/* 第1問：コンポーネントに分割 ↑ ↑ ↑ ↑ ↑ ↑ */}
      <hr />
      <FilterableBookTable
        books={books}
        onClickDelete={(id) => {
            {/* 第2問：貸出 or 返却 or 削除の処理を追加 */}            
          }
        }
        onClickLendingSwitch={(id) => {
            {/* 第2問：貸出 or 返却 or 削除の処理を追加 */}            
          }
        }
      />
    </div>
  );
}

export default App;

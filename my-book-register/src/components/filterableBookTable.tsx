import { ChangeEventHandler, useState } from 'react';
import { BookItemModel } from '../models';
import BookTable from './bookTable';
import LabelInput from './labelInput';

interface Props {
  books: BookItemModel[];
  onClickDelete: (id: string) => void;
  onClickLendingSwitch: (id: string) => void;
}

const FilterableBookTable = ({
  books,
  onClickDelete,
  onClickLendingSwitch,
}: Props) => {
  const [filterText, setFilterText] = useState('');
  const [radioOption , setRadioOption] = useState("all")
  
  const handleChangeFilterText: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFilterText(e.target.value);

  const onCheck = (event : React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setRadioOption(event.target.value)
  }

  const filBooks = (books : BookItemModel[])=> {
    if (radioOption == "isLoanAble"){
      return books.filter( (book) => {!book.isOnLoan})
    }else if (radioOption == "notIsLoanAble") {
      return books.filter( (book) => {book.isOnLoan})
    }else{
      return [...books]
    }
  }

  return (
    <div className="filterable-book-table">
      <div className='filter-field'>
        <LabelInput label="filter" handleEvent={handleChangeFilterText}/>
        <fieldset className='field'>
          <legend>貸し出し状況</legend>
          <div>
            <input type="radio" id='all' name='isLoanAble' value = "all" defaultChecked
            onChange={(e)=>{onCheck(e)}}
            /><label htmlFor="all">全て</label>
          </div>
          <div>
            <input type="radio" id='loanAble'name='isLoanAble' value = "LoanAble"
            onChange={(e)=>{onCheck(e)}}/><label htmlFor="loanAble">利用可能</label>
          </div>
          <div>
            <input type="radio" id='notLoanAble' name='isLoanAble' value = "notLoanAble"
            onChange={(e)=>{onCheck(e)}}/><label htmlFor="notLoanAble">貸出中</label>
          </div>
        </fieldset>
      </div>
      <BookTable
        bookItems={filBooks(books).filter(
          (x) => !filterText || x.name.includes(filterText),
        )
      }
        onClickDelete={onClickDelete}
        onClickLendingSwitch={onClickLendingSwitch}
      />
    </div>
  );
};
export default FilterableBookTable;

import LabelInput from "./labelInput"
import { useState , ChangeEventHandler } from "react";

const BooKRegister : React.FC<{handleClickButton:(isbn:string)=>void}> = ({handleClickButton}) => {

    const [isbn, setIsbn] = useState('');

    const callhandleClickButton = (isbn:string) => {
        handleClickButton(isbn)
    }

    const handleChangeIsbn :ChangeEventHandler<HTMLInputElement> = (e) =>
        setIsbn(e.target.value);

      return(
        <div className="book-register">
            <LabelInput label={"ISBNコード"} handleEvent={handleChangeIsbn}></LabelInput>
            <button className="button" onClick={()=>{callhandleClickButton(isbn)}}>
            書籍登録
            </button>
        </div>
    )
}
export default BooKRegister
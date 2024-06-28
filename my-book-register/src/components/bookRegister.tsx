import LabelInput from "./labelInput"
import { useState } from "react";

const BooKRegister : React.FC<{handleClickButton:(isbn:string)=>void}> = ({handleClickButton}) => {

    const [isbn, setIsbn] = useState('');

    const callhandleClickButton = (isbn:string) => {
        handleClickButton(isbn)
    }

    const handleIsbn = (newIsbn:string)=> {
        setIsbn(newIsbn)
    }

      return(
        <div className="book-register">
            <LabelInput handleIsbn={handleIsbn}></LabelInput>
            <button className="button" onClick={()=>{callhandleClickButton(isbn)}}>
            書籍登録
            </button>
        </div>
    )
}
export default BooKRegister
import {ChangeEventHandler} from 'react';


const LabelInput : React.FC<{label:string ,  handleIsbn : ChangeEventHandler<HTMLInputElement>}> = ({label ,handleIsbn}) => {
    return(
        <div className="label-input">
          <label className="label">
            {label}
          </label>
          <input className="input" placeholder="入力してください" onChange={handleIsbn}></input>
        </div>
    )
}
export default LabelInput
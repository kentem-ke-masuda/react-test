import {ChangeEventHandler} from 'react';


const LabelInput : React.FC<{label:string ,  handleEvent : ChangeEventHandler<HTMLInputElement>}> = ({label ,handleEvent}) => {
    return(
        <div className="label-input">
          <label className="label">
            {label}
          </label>
          <input className="input" placeholder="入力してください" onChange={handleEvent}></input>
        </div>
    )
}
export default LabelInput
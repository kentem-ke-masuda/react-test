

const LabelInput : React.FC<{handleIsbn : (newIsbn: string) => void}> = ({handleIsbn}) => {
    return(
        <div className="label-input">
          <label className="label">
            ISBNコード
          </label>
          <input className="input" placeholder="入力してください" onChange={(e) => handleIsbn(e.target.value)}></input>
        </div>
    )
}
export default LabelInput
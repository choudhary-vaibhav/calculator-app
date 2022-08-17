export const Textbox = ({result}) =>{
    return (
        <div className="input-group">
            <input value={result} readOnly="on" className="form-control" type="text"></input>
        </div>
        
    )
}
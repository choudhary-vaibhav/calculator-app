export const Button = ({char, fn}) =>{
    return (
        <button id="b" value={char} onClick={fn} className="btn btn-secondary">{char}</button>
    )
}
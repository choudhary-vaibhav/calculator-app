import { useState } from "react"
import { Button } from "../components/Button"
import { Textbox } from "../components/Textbox"

export const Card =() => {

    const [expression, setExpression] = useState("0");
    const [result, setResult] = useState("");

    const takeInput = (event) =>{
        console.log("call");
        if(expression == '0'){
            setExpression(event.target.value);
        }else{
            setExpression(expression + event.target.value);
        }
        
    }

    const clearAll = () => {
        setExpression("0");
        setResult("");
    }

    const calcResult = () => {
        setResult(eval(expression));
    }
    

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div  className="card" style={{width: "25rem"}}>
                <h2 className="text-muted text-center">Calculator</h2>
                <Textbox result={expression}></Textbox>
                <Textbox result={result}></Textbox>
                <br/>
                <div className="container px-2">
                    <div className="row">
                        <div className="col-sm">
                            <Button fn={takeInput} char='0'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={takeInput} char='1'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={takeInput} char='2'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={takeInput} char='3'></Button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <Button fn={takeInput} char='4'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={takeInput} char='5'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={takeInput} char='6'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={takeInput} char='7'></Button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <Button fn={takeInput} char='8'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={takeInput} char='9'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={takeInput} char='+'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={takeInput} char='-'></Button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <Button fn={takeInput} char='*'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={takeInput} char='/'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={clearAll} char='CE'></Button>
                        </div>
                        <div className="col-sm">
                            <Button fn={calcResult} char='='></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
    )
}
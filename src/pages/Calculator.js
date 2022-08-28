import { useState } from "react"
import { CalcButton } from "../components/CalcButton"
import { Textbox } from "../components/Textbox"
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export const Calculator =() => {

    const [expression, setExpression] = useState("0"); //input
    const [result, setResult] = useState(""); //output

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
        let ans = '';
        try
            {
                ans = eval(expression);
            }
            catch(err)
            {
                ans = 'Error';
            }

            if(ans === undefined){
                ans = 'Error';
            }
        setResult(ans);
    }

    const deleteLastChar = () => {
        var exp = expression;
        exp = exp.substring(0, exp.length-1);
        setExpression(exp);
    }

    const buttons = [
        [
            <CalcButton key='CE' fn={clearAll} char='Clear'></CalcButton>,
            <CalcButton key='DEL' fn={deleteLastChar} char='Delete'></CalcButton>,
        ],
        [
            <CalcButton key='0' fn={takeInput} char='0'></CalcButton>,
            <CalcButton key='1' fn={takeInput} char='1'></CalcButton>,
            <CalcButton key='2' fn={takeInput} char='2'></CalcButton>,
            <CalcButton key='3' fn={takeInput} char='3'></CalcButton>,
        ],
        [
            <CalcButton key='4' fn={takeInput} char='4'></CalcButton>,
            <CalcButton key='5' fn={takeInput} char='5'></CalcButton>,
            <CalcButton key='6' fn={takeInput} char='6'></CalcButton>,
            <CalcButton key='7' fn={takeInput} char='7'></CalcButton>,
        ],
        [
            <CalcButton key='8' fn={takeInput} char='8'></CalcButton>,
            <CalcButton key='9' fn={takeInput} char='9'></CalcButton>,  
        ],
        [
            <CalcButton key='(' fn={takeInput} char='('></CalcButton>,
            <CalcButton key=')' fn={takeInput} char=')'></CalcButton>,
        ],
        [
            <CalcButton key='=' fn={calcResult} char='='></CalcButton>,
            <CalcButton key='+' fn={takeInput} char='+'></CalcButton>,
            <CalcButton key='-' fn={takeInput} char='-'></CalcButton>,
            <CalcButton key='*' fn={takeInput} char='*'></CalcButton>,
            <CalcButton key='/' fn={takeInput} char='/'></CalcButton>,
        ],
        
      ];

    const placeButton = () => {
        return <>
        <Grid container>
            <Grid item xs={9}>
            <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                        m: 0,
                        },
                    }}
                >
                    <ButtonGroup size="large" color="secondary" aria-label="medium secondary button group">
                        {buttons[0]}
                    </ButtonGroup><br/>
                    <ButtonGroup size="large" color="secondary" aria-label="medium secondary button group">
                        {buttons[4]}
                    </ButtonGroup>
                    <ButtonGroup size="large" color="secondary" aria-label="medium secondary button group">
                        {buttons[1]}
                    </ButtonGroup>
                    <ButtonGroup size="large" color="secondary" aria-label="medium secondary button group">
                        {buttons[2]}
                    </ButtonGroup>
                    <ButtonGroup size="large" color="secondary" aria-label="medium secondary button group">
                        {buttons[3]}
                    </ButtonGroup>
                    
                    
                    
                </Box>
            </Grid>
            <Grid item xs={3}>
            <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                        m: 0,
                        },
                    }}
                >
                    <br/>
                    <ButtonGroup orientation="vertical" size="large" color="secondary" aria-label="medium secondary button group">
                        {buttons[5]}
                    </ButtonGroup>
                </Box>
            </Grid>
        </Grid>
        </>
      }
       
    

    return <>
        <h2 className="text-muted text-center">CALCULATOR</h2>
        <Card variant="outlined">
            <CardContent>
                <Textbox result={expression}></Textbox>
                <Textbox result={result}></Textbox>
                <br/>
                {placeButton()}
            </CardContent>
        </Card>
    </>
}
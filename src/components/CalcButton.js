import * as React from 'react';
import Button from '@mui/material/Button';

export const CalcButton = ({char, fn, key}) =>{
    return (
        <Button key={key} value={char} onClick={fn} variant='outlined'>{char}</Button>
    )
}
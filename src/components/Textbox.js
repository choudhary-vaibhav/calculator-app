import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Textbox = ({result}) =>{
    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { width: '33ch', backgroundColor:"#F5F6FF"},
        }}
        noValidate
        autoComplete="off"
        >
        <TextField value={result} disabled id="filled" variant="filled" />
        </Box>
        
    )
}
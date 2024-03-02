import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../styleSheets/submit.css';
import { Link, useNavigate } from 'react-router-dom';

// function Submit() {
//     return (

//         <>
//             <h1>Submit a dare!</h1>
//             <Box
//                 component="form"
//                 sx={{
//                 '& > :not(style)': { m: 5, width: '40ch', height: 10},
//                 }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 <TextField id="outlined-basic" label="Enter your dare!" variant="outlined" />
//             </Box>

//             <IconButton aria-label="delete" size="large" onClick={() => <Meow/>}>
//                 <CheckCircleOutlineIcon fontSize="inherit"/>
//             </IconButton>
//         </>
//     );
// }

function Submit() {

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/homepage');
    }
      
    return (
        <div className = "submit-container">
        <h1 className = "submit-title">Submit a dare!</h1>
        <form className = "submit-form" onSubmit = {handleSubmit}>
            <div className = "form-group">
                <Box
                    component="form"
                    sx={{
                    '& > :not(style)': { m: 5, width: '40ch', size: "large"},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Enter your dare!" variant="outlined" />
                </Box>
            </div>
            <IconButton aria-label="delete" size="large" onClick={() => <Meow/>}>
                    <CheckCircleOutlineIcon fontSize="inherit"/>
                </IconButton>
        </form>
        </div>
    )
}


export default Submit;
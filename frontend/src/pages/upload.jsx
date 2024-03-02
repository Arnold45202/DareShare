import { useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import devil from '../assets/devil.png';
import { Button } from '@mui/material';



function Upload() {
    function handleSubmit(event) {
        event.preventDefault();
        navigate('/home');
    }


    return (
        <>
            <Box sx={{ pt: 2, px: 5, textAlign: 'center' }}>
                <img
                    src = {devil}
                    style={{ width: '70%', height: 'auto', display: 'block', margin: 'auto', marginBottom: '1rem' }}
                />
                <Box sx={{ background: 'rgb(121, 19, 168)', borderRadius: '10px', textAlign: 'center', p: 1 }}>
                    <Typography variant='h4' color={'white'}>
                        UPLOAD A DARE
                    </Typography>
                </Box>
                <Button
                onClick = {handleSubmit}
                style = {{
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'rgb(100, 19, 168)', // Button hover color
                    },
                    transform: 'scale(3.0)',
                    py: 2,
    
                }}
                ><CameraAltIcon />
                </Button>
            
            </Box>
        </>
    )
}

export default Upload
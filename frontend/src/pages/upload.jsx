import { useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import logo from '../assets/ds-logo.png';
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
                    src = {logo}
                    style={{ width: '45%', height: 'auto', display: 'block', margin: 'auto', marginBottom: '1rem' }}
                />
                <Box sx={{px: 2}}>
                    <Typography variant='h4' sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                        UPLOAD YOUR DARE
                    </Typography>
                </Box>
                    <Box sx = {{px : 4}}>
                        <Button
                        onClick = {handleSubmit}
                        
                        sx = {{
                            color: 'white',
                            transform: 'scale(4.0)',
                            py: 0.5,
                            px: 0.2,
                            top: 12                   
                        }}
                        ><CameraAltIcon />
                        </Button>
                    </Box>
                <Typography variant = 'h8' sx = {{ color: 'white', textAlign: 'center'}}>
                    Take a video
                </Typography>
            
            </Box>
        </>
    )
}

export default Upload
import { useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import logo from '../assets/ds-logo.png';
import { Button } from '@mui/material';
import { useRecordWebcam } from 'react-record-webcam'



function Upload() {
    const {
        activeRecordings,
        createRecording,
        openCamera,
        startRecording,
        stopRecording,
      } = useRecordWebcam()
    
    const example = async () => {
    try {
        const recording = await createRecording();
        if (!recording) return;
        await openCamera(recording.id);
        await startRecording(recording.id);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await stopRecording(recording.id);
    } catch (error) {
        console.error({ error });
    }
    };
    
    function handleSubmit(event) {
        event.preventDefault();
        navigate('/home');
    }

    const FileInput = () => {
        <input accept="image/*" type="file" capture="environment" />;
    };


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
                        onClick = {example}
                        sx = {{
                            color: 'white',                
                        }}
                        ><CameraAltIcon sx = {{fontSize: 100}}/>
                        {activeRecordings.map(recording => (
                            <div style={{
                                position: 'absolute',
                                marginTop: '140px',
                                zIndex: 1,
                            }} key={recording.id} >
                            <video width = "320" height = "240" ref={recording.webcamRef} autoPlay muted />
                              <video position = 'absolute' width = "320" height = "240" ref={recording.previewRef} autoPlay muted loop />
                            </div>
                          ))}
                        </Button>
                    </Box>
                <Typography variant='h4' sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15, top: 10}}>
                    Take a video
                </Typography>
                    <Box sx = {{px : 4, py: 3}}>
                        <input accept="video/*" type="file" id = "select-image" style = {{display: 'none'}} />;
                        <label htmlFor = "select-image">
                            <Button
                                component = "span"
                                sx = {{
                                    color: 'white',                
                                }}
                                ><CollectionsIcon sx = {{fontSize: 100}} />
                            </Button>
                        </label>
                    </Box>
                    <Typography variant='h4' sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>
                        Upload from your gallery
                    </Typography>
            </Box>
        </>
    )
}

export default Upload
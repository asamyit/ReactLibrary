import React from 'react'
import { CardActionArea,Card,CardContent,Typography } from '@mui/material';
export default function MuiCom(props) {
  return (
    <div>
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.body}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}

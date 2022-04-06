import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const Album = ({artwork, artistName, albumName}) => {
    return(
        <Card sx={{
            height: '100%'
        }}>
            <CardActionArea sx={{
                height: '100%'
            }}>
                <CardMedia
                    component="img"
                    height="200"
                    width="200"
                    image={artwork}
                    alt={`${albumName} cover`}
                />
                <CardContent sx={{
                    height: '100%',

                }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {albumName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {artistName}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}

export default Album;
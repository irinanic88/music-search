import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const Album = ({artwork, artistName, albumName}) => {
    return(
        <Card sx={{
            maxWidth: 250,
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    width="200"
                    image={artwork}
                    alt={`${albumName} cover`}
                />
                <CardContent>
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
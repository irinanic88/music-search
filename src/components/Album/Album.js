import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Album = ({artwork, artistName, albumName}) => {
    return(
        <Box sx={{
            width: 220,
        }}>
            <Box
                component="img"
                sx={{
                    height: 200,
                    width: 200,
                }}
                alt={`${albumName} cover`}
                src={artwork}
            />
            <Typography component="h3" align="center">{albumName}</Typography>
            <Typography component="h4" align="center">{artistName}</Typography>
        </Box>
    )
}

export default Album;
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currentAlbumsViewSelector } from '../../store/selectors';
import { Card, CardContent, Typography } from '@mui/material';
import {
    CustomCardActionArea,
    CustomCardMedia,
    moduleCardDisplay,
    listCardDisplay,
    moduleImageDisplay,
    listImageDisplay
} from './styles';

const Album = ({artwork, artistName, albumName}) => {
    const currentView = useSelector(currentAlbumsViewSelector);
    const [cardVars, setCardVars] = useState(moduleCardDisplay);
    const [imgVars, setImgVars] = useState(moduleImageDisplay);

    useEffect(() => {
        currentView === 'list' ? setCardVars(listCardDisplay) : setCardVars(moduleCardDisplay);
        currentView === 'list' ? setImgVars(listImageDisplay) : setImgVars(moduleImageDisplay);
    }, [currentView]);

    return(
        <Card sx={{height: '100%'}}>
            <CustomCardActionArea style={cardVars}>
                <CustomCardMedia
                    component="img"
                    image={artwork}
                    alt={`${albumName} cover`}
                    style={imgVars}
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
            </CustomCardActionArea>
        </Card>

    )
}

export default Album;
import { styled } from '@mui/material/styles';
import { CardActionArea, CardMedia } from '@mui/material';

//card styles

export const CustomCardActionArea = styled(CardActionArea)({
    height: '100%',
    display: 'flex',
    flexDirection: 'var(--flexDirection)',
    justifyContent: 'flex-start',
});

export const listCardDisplay = {
    '--flexDirection': 'row',
};

export const moduleCardDisplay = {
    '--flexDirection': 'column',
};

//img styles

export const CustomCardMedia = styled(CardMedia) ({
    width: 'var(--imageWidth)',
    height: 'var(--imageHeight)',
});

export const listImageDisplay = {
    '--imageWidth': '100px',
    '--imageHeight':'100px'
}

export const moduleImageDisplay = {
    '--imageWidth': '100%',
    '--imageHeight': 'auto'
}
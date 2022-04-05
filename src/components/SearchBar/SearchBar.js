import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadAlbums } from '../../store/actions';
import { urlEncode } from '../../utils/utils';
import {
    Box,
    IconButton,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSearchValue(newValue.toString());
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(loadAlbums(urlEncode(searchValue)));
    }

    return(
        <Box>
            <form onSubmit={handleFormSubmit}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="search-music">Search music</InputLabel>
                    <OutlinedInput
                        id="search-music"
                        value={searchValue}
                        onChange={handleInputChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="submit-search"
                                    onClick={handleFormSubmit}
                                    edge="end"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Search music"
                    />
                </FormControl>
            </form>
        </Box>
    )
}

export default SearchBar;
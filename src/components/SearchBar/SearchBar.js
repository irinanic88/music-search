import React, { useState } from 'react';
import {
    Box,
    IconButton,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [stringToSearch, setStringToSearch] = useState('');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setStringToSearch(newValue);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return(
        <Box>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="search-music">Search music</InputLabel>
                <OutlinedInput
                    id="search-music"
                    value={stringToSearch}
                    onChange={handleInputChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="search-button"
                                onClick={handleFormSubmit}
                                onMouseDown={handleFormSubmit}
                                edge="end"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Search music"
                />
            </FormControl>
        </Box>
    )
}

export default SearchBar;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadAlbums } from '../../store/actions';
import { urlEncode } from '../../utils/utils';
import {
    IconButton,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSearchValue(newValue.toString());
    }

    const handleFormSubmit = () => {
        dispatch(loadAlbums(urlEncode(searchValue)));
    }

    return(
        <div data-id="search-bar">
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
        </div>
    )
}

export default SearchBar;
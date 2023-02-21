import { TextField } from '@mui/material'

const Search = (props) => {
    const { onChange, value } = props;
    
    return <TextField 
        fullWidth={true}
        label='search'
        variant='standard'
        type='search' 
        value={value} 
        onChange={onChange} 
        sx={{ mb: '1rem' }}
        />;
};

export default Search;
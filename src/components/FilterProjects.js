import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const optionsFilter = (options) => (
    options.map((option)=>
        <MenuItem value={option} key={option}>{option}</MenuItem>
    )
)

const FilterProjects = ({languages, callBack, projects}) => {
    const [selectedOption, setSelectedOption] = useState("")

    const handleChange = (event) => {
        setSelectedOption(event.target.value)
        callBack(projects,event.target.value)
    }
    return (
        <TextField
            select
            label="Select the project language"
            value={selectedOption}
            onChange={handleChange}
            margin="normal"
            fullWidth={true}
            >
            {optionsFilter(languages)}
        </TextField>
    )
};

export default FilterProjects;
import React, { useState } from 'react';
import Input from '@material-ui/core/Input';

const CompanyDetails = (props) => {
    const constructDetails = () => {
        return props.result.map(project=>
            (
             <ul> 
                 <label>name: {project.name} </label>
                <li>language:{ project.language}</li> 
              </ul>  
            ))
    };

    return (
        <>
            {props.result.length && constructDetails()}
        </>
    );
}

export default CompanyDetails;
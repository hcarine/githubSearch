import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import {getCompanyProject} from '../client/api'

const SearchProject = (props) => {
    const [project, setProject] = useState("")
    const [result, setResult] = useState("")
    const chageInput = (event) => {
        const projectName = event.target.value
        setProject(projectName)
        if(projectName.length >= 3 ){
            callApi(projectName)
        }
    };
  const callApi = (text) => {
    getCompanyProject(text,setResult)
  }

    return (
        <>
        <Input value={project} type="text" onChange={chageInput}/>
        <div>
            {result.length}
        </div>
        </>
    );
}

export default SearchProject;
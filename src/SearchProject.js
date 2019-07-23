import React, { useState } from 'react';
import Input from '@material-ui/core/Input';

const SearchProject = (props) => {
    const [project, setProject] = useState("")
  const chageInput = (event) => {
    const projectName = event.target.value
    setProject(projectName)
    if(projectName.length >= 3 ){
        callApi(projectName)
    }
  };
  const callApi =(text) => {
      console.log(text)
  }

    return (
        <Input value={project} type="text" onChange={chageInput}/>
    );
}

export default SearchProject;
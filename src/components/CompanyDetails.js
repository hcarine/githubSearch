import React from 'react';
import ProjectCards from './ProjectCards'

const CompanyDetails = (props) => {
    return  props.result.length  ? (
        <>
        <div>
            <h1>Name: {props.result[0].owner.login}</h1>
            <h1>gravatar: {props.result[0].owner.avatar_url}</h1>
        </div>
        <div>Projects</div>
        <ProjectCards company={props.result}/>
        </>
       ): 
       <div>
           The company does not exist
       </div>
}

export default CompanyDetails;
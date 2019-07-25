import React from 'react';
import ProjectCards from './ProjectCards'

const CompanyDetails = (props) => {
    return  props.result.length  ? (
        <div>
            <h1>
                <img src={props.result[0].owner.avatar_url} alt="company avatar" height="42" width="42"></img>
                 {props.result[0].owner.login}
            </h1>

            <h2>Projects</h2>
            <ProjectCards company={props.result}/>
        </div>
       ): 
       <div>
           The company does not exist
       </div>
}

export default CompanyDetails;
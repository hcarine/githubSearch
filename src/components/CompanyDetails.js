import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CompanyDetails = (props) => {
    const constructProjects = () => {
        return props.result.map(project=>
            (
            <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography color="textSecondary">
                    { project.language}
                  </Typography>
                  <Typography variant="body2" component="p">
                    { project.stars}
                  </Typography>
                </CardContent>
              </Card>
            ))
    };

    return (
        <>
       { props.result.length &&
        <div>
            <h1>Name: {props.result[0].owner.login}</h1>
            <h1>gravatar: {props.result[0].owner.avatar_url}</h1>
        </div>
        }
        <div>Projects</div>
           {  props.result.length && constructProjects()}
           
        </>
    );
}

export default CompanyDetails;
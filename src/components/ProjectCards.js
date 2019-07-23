import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ProjectCards = (props) => {
    return props.company.map(project=>
        (
        <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {project.name}
              </Typography>
              <Typography color="textSecondary">
                { project.language}x
              </Typography>
              <Typography variant="body2" component="p">
                { project.stars}
              </Typography>
            </CardContent>
          </Card>
        ))
};

export default ProjectCards;
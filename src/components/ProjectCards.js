import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const cardStyle = {
  'width':'10%',
  'display':'inline-block',
  'margin': '10px',
}

const ProjectCards = ({projects}) => {
    return projects.map(project=>
        (
        <Card style={cardStyle} key={project.id}>
            <CardContent>
              <Typography variant="h6" component="h4">
                {project.name}
              </Typography>
              <Typography color="textSecondary">
                { project.language }
              </Typography>
              <Typography variant="body2" component="p">
                Stars: { project.stargazers_count}
              </Typography>
            </CardContent>
          </Card>
        ))
};

export default ProjectCards;
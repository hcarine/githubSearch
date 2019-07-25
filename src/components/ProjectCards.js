import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const cardStyle = {
  'width':'10%',
  'display':'inline-block',
  'margin': '10px',
}

const ProjectCards = (props) => {
    return props.company.map(project=>
        (
        <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6" component="h4">
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
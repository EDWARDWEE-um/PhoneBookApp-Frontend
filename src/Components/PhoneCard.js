import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: '20rem',
    maxHeight:'50rem',
    flexGrow: 1,
    marginTop:'2rem',
    marginLeft:'auto',
    marginRight:'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { posts } = props;
  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
  return (
    <React.Fragment>
			
	{posts.map((post) => {
	return (
    <Card className={classes.root}  >
        <CardContent>
          <Typography variant="h5" component="h2">
              {post.name}
          </Typography>
          <Typography variant="h6" component="h2">
              {post.phone_number}
          </Typography>
     
        </CardContent>
    </Card>	);
	})}	
	</React.Fragment>
  );
}
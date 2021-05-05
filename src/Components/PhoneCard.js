import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from 'react-responsive'


const useStyles = makeStyles({
  root: {
   
    flexGrow: 1,
    marginTop:'2rem',
    marginLeft:'auto',
    marginRight:'auto',
    boxShadow: '10px 10px grey',
    background: '#ee9ca7',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #ffdde1, #ee9ca7)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #ffdde1, #ee9ca7)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }
  

export default function SimpleCard(props) {
  const classes = useStyles();
  const { posts } = props;
  if (!posts || posts.length === 0) return <p>Cannot find any contact, sorry</p>;
  return (
    <React.Fragment>
			
	{posts.map((post) => {
	return (
        <div>
        <Desktop>
        <Card className={classes.root} style={{height:'30vh', width:'70vh'}} >
        <CardContent>
          <Typography variant="h2" component="h2" style={{textAlign:'center',marginTop:'2rem', marginBottom:'2rem'}}>
              {post.name}
          </Typography>
          <Typography variant="h3" component="h2" style={{textAlign:'center'}}>
              {post.phone_number}
          </Typography>
     
        </CardContent>
        </Card>
        </Desktop>

        <Tablet>
        <Card className={classes.root}  style={{height:'20vh', width:'60vh'}} >
        <CardContent>
          <Typography variant="h3" component="h2" style={{textAlign:'center',marginTop:'2rem', marginBottom:'2rem'}} >
              {post.name}
          </Typography>
          <Typography variant="h4" component="h2" style={{textAlign:'center'}}>
              {post.phone_number}
          </Typography>
        </CardContent>
        </Card>
        </Tablet>

        <Mobile>
        <Card className={classes.root} style={{height:'20vh', width:'40vh'}}  >
        <CardContent>
          <Typography variant="h5" component="h2" style={{textAlign:'center',marginTop:'1rem', marginBottom:'1rem'}}>
              {post.name}
          </Typography>
          <Typography variant="h6" component="h2" style={{textAlign:'center'}}>
              {post.phone_number}
          </Typography>
        </CardContent>
        </Card>
        </Mobile>
        
        </div>
    	);
	})}	
	</React.Fragment>
  );
}
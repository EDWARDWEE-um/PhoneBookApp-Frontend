import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';

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
  form: {
    width: '80%', // Fix IE 11 issue.
    marginLeft: 'auto',
    marginRight: 'auto',
    },
  
  
});



export default function SignIn(props) {
	const history = useHistory();
	const initialFormData = Object.freeze({
		name: '',
		phone: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
	
	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};
    const [value,setValue] = useState();

	

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(value);
        axiosInstance
			.post(``, {
				name: formData.name,
				phone_number: value,
			})
			.then((res) => {
				history.push('/');
			});

	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
            <Card className={classes.root}  >
            <div className={classes.paper}>
			
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
                        margin="dense"
                        fullWidth
						required
						id="name"
						label="Name"
						name="name"
						onChange={handleChange}
					/>
                    < PhoneInput className="home"
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                    />
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
                        style={{marginTop:'0.5rem', marginBottom:"0.5rem"}}
						className={classes.submit}
						onClick={handleSubmit}
					>
						Add 
					</Button>
				</form>
			</div>
            </Card>
			
		</Container>
	);
}
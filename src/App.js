import PhoneCard from './Components/PhoneCard'
import axiosInstance from './axios'; 
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function App() {
	const [appState, setAppState] = useState({
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({  posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Latest Posts</h1>
      <PhoneCard posts={appState.posts} />
     
		</div>
	);
}

export default App;

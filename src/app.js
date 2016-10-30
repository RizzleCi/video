import React from 'react'
import Video from './components/video'

class App extends React.Component{
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<Video width="500" height="300" controls="true" autoPlay="true">
				<source src="../videos/7.mp4"></source>

			</Video>
		)
	}
}
export default App

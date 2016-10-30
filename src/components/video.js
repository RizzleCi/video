import React from 'react'

class Video extends React.Component{
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<video id="video" {...this.props}>
				{this.props.children}
			</video>
		)
	}
}
export default Video

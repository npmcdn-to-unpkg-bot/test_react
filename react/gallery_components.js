import React, { Component } from 'react';


class Gallery extends React.Component {
	constructor(props) {
		super(props)
		this.id = props.id;
		this.type = props.type;
	}

	render() {
		var data;
		var images;
		switch(this.type) {
			case "photo":
				return addPhotoGallery(this.id);
		}
	}

	/*
	What parts use gallery? 
	Eventually photo, drawing, and sculpture
	right now only photo


	*/

	addPhotoGallery(id) {
		data;
		images;
		// data = [address, title, [images]]
		// need to change banner background based on id
		return (
			<div className="content_page">
				<div className="exit"></div>
				<div className="photo_gallery">
					<div className="photo_banner_container">
						<div className="photo_banner_title" value={data[1]}></div>
					</div>
					<div className="grid" style={init_style}>
					<div className="grid-sizer"></div>
						images.map(addMasonComp(entry));
					</div>
				</div>
			</div>
		);
	};

	addMasonComp(element) {

	}
}

export default Gallery;
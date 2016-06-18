import React, { Component } from 'react';

//Showcase Area 

//Links Class




/* NOTE/TODO
	- May need to change the onclick methods currently embedded in the links
	- May be wise to make a broader blog class for blog, about, and project,
		would eliminate unnecessary complexity 
	- Need to construct links (initially display:none) with sections links
	- Need to construct photo type initially  

*/
class Links extends React.Component {
	constructor(props) {
		super(props);
		this.type;
	}
	var init_style = {
		display: 'none';
	};

	/*
		Pass in type, type used to access correct data
		Rather than dealing with const fxn, make all the different components elements
		of Links 
	*/

	render() {
		var data;
		switch (this.type) {
			case "photo":
				data = photo_links;
				return (
					<div className="links" id="link_box" style={init_style}>
						data.map(addPhotoComp(entry)); //Need to figure out the correct fxn 
					</div>
				);
			case:"drawing":
				data = drawing_links;
				return (
					<div className="grid" id="grid_drawing" style={init_style}>
					<div className="grid-sizer"></div>
						data.map(addDrawingComp(entry)); //Need to figure out the correct fxn 
					</div>
				);
			case:"sculpture":
				data = sculpture_links;
				return (
					<div className="grid" id="grid_drawing" style={init_style}>
					<div className="grid-sizer"></div>
						data.map(addSculptureComp(entry)); //Need to figure out the correct fxn 
					</div>
				);
			case:"blog":
				data = blog_links;
				return (
					<div className="links" id="link_box" style={init_style}>
						data.map(addBlogComp(entry)); //Need to figure out the correct fxn 
					</div>
				);
			case:"about":
				data = about_links;
				return (
					<div className="links" id="link_box" style={init_style}>
						data.map(addAboutComp(entry)); //Need to figure out the correct fxn 
					</div>
				);
			case:"project":
				data = project_links;
				return (
					<div className="links" id="link_box" style={init_style}>
						data.map(addProjectComp(entry)); //Need to figure out the correct fxn 
					</div>
				);
			case:"contact":
		};
	};

	//Photo

	addPhotoComp(element) {
		var link_address = element[0];
		var link_type = element[3]
		var final_address = "http://www.stevenelleman.com/pw2-images/images/image_links/photo/"+link_address+".jpg";
		var final_type = link_type + "_photo";

		return (
			<div className="link_img" id={element[0]} onclick={"openPhoto(id)"} >
				<img src={final_address}>
				<div className="link_name" value={element[1]}></div>
				<div className="date_loc" value={element[2]}></div>
				<div className="link_type" title={link_type}>
					<img src={"http://www.stevenelleman.com/pw2-images/images/icons/type_icons/photo_"+link_type+"_white.png"}; //icon based on passed in value
				</div>
			</div>
			);
	};


	//Might not be a method of Links
	addPhotoGallery(id) => {

		return (
			<div className="content_page">
				<div className="exit"></div>
				<
		);
	};

	//Drawing 

	addDrawingComp(element) {
		//element[0] -> address
		//element[1] -> title 

		return (
			<div className="grid-item">
				<img src={"http://www.stevenelleman.com/pw2-images/images/image_links/drawing/" + element[0]+ ".jpg"}>
				<div className="drawing_title" value={element[1]}></div>
			</div>
		);
	};

	//Sculpture 

	addSculptureComp(element) => {
		//element[0] -> address
		//element[1] -> title 
		
		return (
			<div className="grid-item">
				<img src={"http://www.stevenelleman.com/pw2-images/images/image_links/sculpture/" + element[0]+ ".jpg"}>
				<div className="sculpture_title" value={element[1]}></div>
			</div>
		);
	};

	//Blog 

	//Consider making a separate collapsed and footer class for 
	// Blog, About, and Project

	addBlogComp(element) {
		return (
			<div className="blog_container blog_collapsed" onclick={"openBlog(this)"}>
				<div className="blog_header">
					<div className="blog_title" value={element[1]}></div>
					<div className="blog_date" value={element[2]}></div>
				</div>
				<div className="blog_content" value={element[3]}>
				</div>
				<div className="blog_footer blog_collapsed"></div>
			</div>
		);
	};

	//Projects 

	addProjectComp(element) {
		return (
			<div className="project_container project_collapsed" onclick={"openProject(this)"}>
				<div className="project_header">
					<div className="project_title" value={element[1]}></div>
					<div className="project_date" value={element[2]}></div>
				</div>
				<div className="project_content" value={element[3]}>
				</div>
				<div className="project_footer project_collapsed"></div>
			</div>
		);
	};

	//About 

	addAboutComp(element) {
		var link_address = element[0];
		var link_content = element[2];
		var final_address = "http://www.stevenelleman.com/pw2-images/images/image_links/about/"+link_address+".jpg";
		//class about_tile is the same as about_banner 
		return (
			<div className="about_container about_collapsed" onclick={"openAbout(this)"}>
				<div className="about_header">
					<div className="about_title" value={element[1]}></div>
				</div>
				<div className="about_content" value={element[3]}>
				</div>
				<div className="about_footer about_collapsed"></div>
			</div>
		);
	};

	//Contact
}

export default Links;


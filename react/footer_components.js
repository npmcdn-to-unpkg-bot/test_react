import React, { Component } from 'react';


class Footer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="footer_container" style="height: 77.1px;">
				<div className="footer_inner_container">
					<div className="footer_link">
						<img className="footer_img" src="images/icons/company_icons/medium.png">
					</div>
					<div className="footer_link">
						<a href="https://github.com/selleman">
							<img className="footer_img" src="images/icons/company_icons/github.png">
						</a>
					</div>
					<div className="footer_link">
						<a href="mailto:selleman@berkeley.edu">
							<img className="footer_img" src="images/icons/company_icons/google.png">
						</a>
					</div>
					<div className="watermark">
						<img className="watermark_img" src="images/icons/type_icons/name.png"> 
					</div>
				<div className="footer_link">
					<a href="https://instagram.com/steven.elleman/">
						<img className="footer_img" src="images/icons/company_icons/instagram.png">
					</a>
				</div>
				<div className="footer_link">
					<a href="https://www.linkedin.com/profile/view?id=383561216&amp;authType=NAME_SEARCH&amp;authToken=dRLq&amp;locale=en_US&amp;srchid=3835612161435447317621&amp;srchindex=1&amp;srchtotal=2&amp;trk=vsrp_people_res_name&amp;trkInfo=VSRPsearchId%3A3835612161435447317621%2CVSRPtargetId%3A383561216%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue">
						<img className="footer_img" src="images/icons/company_icons/linkedin.png">
					</a>
				</div>
				<div className="footer_link">
					<a href="https://www.facebook.com/steven.elleman">
						<img className="footer_img" src="images/icons/company_icons/facebook.png">
					</a>
				</div>
				</div>
					<div className="copyright">© 2016 Icons and Site Designed by Steven Elleman
				</div>
			</div>
		);
	};
};

export default Footer;
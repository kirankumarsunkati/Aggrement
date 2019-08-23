import React from 'react';
import './CA.css';
import back from './nav-back.png';
import close from './nav-close.png';

class CAHeader extends React.Component{
render(){
	const {Text} = this.props;
	const {showCloseIcon} = this.props;
	const {showBackArrow} = this.props;
	const {showPipe} = this.props;
  return(
			<div className="CAWrapper">
				<span className="floatLeft">
							{showBackArrow && <span className = "fLeft icons" > <img src={back} alt="navBack" className="navBack"></img></span>}
							{showPipe && <span className = "fLeft pipiIcon"></span>}
							<span className="mainHeader tLeft fLeft">{Text}</span>
				</span>
				<span className="floatRight">
						<img src={close} alt="close" className="closeIcon"></img>
				</span>
			</div>
  );

}
}
export default CAHeader;

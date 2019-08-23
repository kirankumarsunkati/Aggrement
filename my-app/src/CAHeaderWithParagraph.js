import React from 'react';
import './CA.css';

class CAHeaderWithParagraph extends React.Component{
render(){
	const {HeaderTitle} = this.props;
	const {content} = this.props;
	const {subTitle} = this.props;
	const {showMinIcon} = this.props;
	const {showGray} = this.props;
	let backGroundColor = showGray === 'true' ? 'applyGray' : '';
	let classNameForWrapper = "CAWrapper noBorder";
	classNameForWrapper = classNameForWrapper + ' ' +  backGroundColor;
  return(
			<div className= {classNameForWrapper}>
				<span className="floatLeft">
					{console.log(showGray === 'true')}
							<p>
							{ HeaderTitle && <span className="paraHeader fLeft">{HeaderTitle}</span>}
							{showMinIcon &&	<a href="#"> <span className="minIcon floatRight"></span></a>}
							</p>
							{ content && <p className="paraContent fLeft tLeft clearBoth">{content}</p>}
							{subTitle && <p className="paraHeader footer fLeft tLeft clearBoth">{subTitle}<span className="arrowRight">></span></p>}
				</span>
				<div className="clearBoth"></div>
			</div>
  );

}
}
export default CAHeaderWithParagraph;

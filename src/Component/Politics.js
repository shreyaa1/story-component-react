import React, { Component } from 'react';

export class Politics extends Component{
 render(){
 	return(
      <div className ="Wrapper">
           <Card/> 
              <Story/>               
          </div>     

 		);
 }
}









 export class Card extends Component {
  render() {
  	const cardImage = this.props.showImage ? <img  src="https://i.pinimg.com/474x/10/96/53/109653ffcec20fba4fde294af1cda9df--email-templates-best-practice.jpg" 
  alt="Two_girls_speaking_to_each_other" /> :null;
  return (

           <div className = 'card'>
              {cardImage}
              <div className={this.props.giveThisColor}>
              <p  className={this.props.cardContent}>{this.props.content}</p>
              <p className={this.props.cardAuthorName}>{this.props.author}</p></div>
           </div>
    );
}
}

   export class Story extends Component {
render(){
    return (

           <div className = 'Story'>
              <p className={this.props.storyContent}>{this.props.content}</p>
              <p className={this.props.storyAuthorName}>{this.props.author}</p>
              </div>
    );
}
}
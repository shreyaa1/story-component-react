import React, { Component } from 'react';

export class Carousel extends Component {
  render() {
  const cardImage = this.props.showImage ? <img  src="https://i.pinimg.com/474x/10/96/53/109653ffcec20fba4fde294af1cda9df--email-templates-best-practice.jpg" 
  alt="Two_girls_speaking_to_each_other" /> : null;
  	return(

  		 <div className = 'Carousel'>
               <img src= {this.props.cardImage}/>
               <div className={this.props.storyContentWrapper}>
              <p  className={this.props.cardTitle}>{this.props.title}</p>
              <p  className={this.props.cardHeading}>{this.props.heading}</p>
              <p  className={this.props.cardContent}>{this.props.content}</p>
               <div className={this.props.authorDetail}>
               <img src= {this.props.image}/>
               <div className={this.props.authorPostDate}>
               <p className={this.props.authors}>{this.props.author}</p>
              <p className={this.props.postDates}>{this.props.postDate}</p>
              </div>
              </div>
              </div>
           </div>
  		);
}
}

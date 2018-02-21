import React from 'react';

const Carousel = (props) => {
  
  	return(
      <div className = 'Carousel'>
        <img src= {props.cardImage}/>
        <div className={props.storyContentWrapper}>
          <p  className={props.cardTitle}>{props.title}</p>
          <p  className={props.cardHeading}>{props.heading}</p>
          <p  className={props.cardContent}>{props.content}</p>
          <div className={props.authorDetail}>
          <img src= {props.image}/>
            <div className={props.authorPostDate}>
              <p className={props.authors}>{props.author}</p>
              <p className={props.postDates}>{props.postDate}</p>
            </div>
          </div>
        </div>
      </div>
  		);
}

export default Carousel;
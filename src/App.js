import React, { Component } from 'react';
import './App.css';
import './Component/Carousel.css';
import './Component/Politics.css';
import Carousel from './Component/Carousel';
import { Card , Story }  from './Component/Politics';
import Slider from 'react-slick';


class App extends Component {
  render() {
    const story1 = {
      content: 'Jenny Lawson Is Publishing a New Book and It’s Sort of a Coloring Book',
      author: 'Jonnathan Doe',

    };

    const story2 = {
      content: 'Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service',
      author: 'Alice Doe'

    };

    const story3 = {
      content: 'Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service',
      author: 'Alex Parkinson'
     };


    const story4 = {
      content: 'Warning Letter For Ankleshwar Plant Sends Wockhardt Shares To Near 2.5-Year Low',
      author: 'Alice Doe'

    };

    const story5 = {
      content: 'Sundar Pichai Launches ‘Digital Unlocked’ Programme ',
      author: 'Jonnathan Doe'

    };

    const story6 = {
      content: 'Warning Letter For Ankleshwar Plant Sends Wockhardt Shares To Near 2.5-Year Low',
      author: 'Alice Doe'

    };
     const story7 = {
      cardImage:'https://helytimes.files.wordpress.com/2016/05/img_1378.jpg?w=590&h=443',
       title:'SCIENCE',
       heading:'Lin-Manuel Miranda says Donald Trump is spreading ‘a virulent strain of a virus',
       content:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
       image:'http://www.azquotes.com/public/pictures/authors/44/45/4445ab630ac85253fd3881672a68ca22/c_52a1e58adb842_thumb.jpg',
       author: 'Alice Doe',
       postDate:'some date'
     
    };



    const stories = {
      story1: story1,
      story2: story2,
      story3: story3,
      story4: story4,
      story5: story5,
      story6: story6,
      story7: story7,


    };

    return (
      <div className="App">

        <div className = "boxWrapper">
           <Stories articles={stories} />
        </div>
     </div>
    );
  }
}


const Two_row_story = (props) => {
  const cardImage = props.showImage ? <img src="https://i.pinimg.com/474x/10/96/53/109653ffcec20fba4fde294af1cda9df--email-templates-best-practice.jpg" 
  alt="Two_girls_speaking_to_each_other" /> : null;
  return (

           <div className = 'Two_row_story'>
              {cardImage}
              <p>{props.author}</p>
           </div>
    );
}
const Stories = (props) => {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
<div className='container-wrapper'>

<Slider>
     <div className="container slide-content">
       <div className="card-wrapper">
          <div>
            <img src={props.articles.story7.cardImage} />
          </div>
          <Carousel  storyContentWrapper='story-content-wrapper' title={props.articles.story7.title} 
          cardTitle='text-cards-title' heading={props.articles.story7.heading} cardHeading='text-cards-heading' content={props.articles.story3.content}
          cardContent='card-content' authors='author-name' postDates='post-date'
           author={props.articles.story3.author}  authorDetail='author-details' authorPostDate='author-detail-date'
            storyContent="story-story-content" storyAuthorName="story-story-author" image={props.articles.story7.image} image={props.articles.story7.image} postDate={props.articles.story7.postDate} />
          </div>
        </div>

        <div className="container slide-content">
       <div className="card-wrapper">
        <div>
          <img src={props.articles.story7.cardImage}/>
        </div> 
         <Carousel  storyContentWrapper='story-content-wrapper' title={props.articles.story7.title} 
          cardTitle='text-cards-title' heading={props.articles.story7.heading} cardHeading='text-cards-heading' content={props.articles.story3.content}
          cardContent='card-content' authors='author-name' postDates='post-date'
           author={props.articles.story3.author}  authorDetail='author-details' authorPostDate='author-detail-date'
            storyContent="story-story-content" storyAuthorName="story-story-author" image={props.articles.story7.image} image={props.articles.story7.image} postDate={props.articles.story7.postDate}/>
            </div>
        </div>

          <div className="container slide-content">
       <div className="card-wrapper">
        <div>
          <img src={props.articles.story7.cardImage}/>
        </div> 
         <Carousel  storyContentWrapper='story-content-wrapper' title={props.articles.story7.title} 
          cardTitle='text-cards-title' heading={props.articles.story7.heading} cardHeading='text-cards-heading' content={props.articles.story3.content}
          cardContent='card-content' authors='author-name' postDates='post-date'
           author={props.articles.story3.author}  authorDetail='author-details' authorPostDate='author-detail-date'
            storyContent="story-story-content" storyAuthorName="story-story-author" image={props.articles.story7.image} image={props.articles.story7.image} postDate={props.articles.story7.postDate}/>
            </div>
        </div>

          <div className="container slide-content">
       <div className="card-wrapper">
        <div>
          <img src={props.articles.story7.cardImage}/>
        </div> 
         <Carousel  storyContentWrapper='story-content-wrapper' title={props.articles.story7.title} 
          cardTitle='text-cards-title' heading={props.articles.story7.heading} cardHeading='text-cards-heading' content={props.articles.story3.content}
          cardContent='card-content' authors='author-name' postDates='post-date'
           author={props.articles.story3.author}  authorDetail='author-details' authorPostDate='author-detail-date'
            storyContent="story-story-content" storyAuthorName="story-story-author" image={props.articles.story7.image} image={props.articles.story7.image} postDate={props.articles.story7.postDate}/>
            </div>
        </div>


  <div className="container slide-content">
       <div className="card-wrapper">
        <div>
          <img src={props.articles.story7.cardImage}/>
        </div> 
         <Carousel  storyContentWrapper='story-content-wrapper' title={props.articles.story7.title} 
          cardTitle='text-cards-title' heading={props.articles.story7.heading} cardHeading='text-cards-heading' content={props.articles.story3.content}
          cardContent='card-content' authors='author-name' postDates='post-date'
           author={props.articles.story3.author}  authorDetail='author-details' authorPostDate='author-detail-date'
            storyContent="story-story-content" storyAuthorName="story-story-author" image={props.articles.story7.image} image={props.articles.story7.image} postDate={props.articles.story7.postDate}/>
            </div>
        </div>
</Slider>




    <div className="container">
      <h1 className="title">Politics</h1>

       <div className="cards">

    <div className="primary-cards">
        <Card content={props.articles.story1.content}  giveThisColor="block"  cardAuthorName="card-story-author" 
          cardContent="cards-story-content" author={props.articles.story1.author} showImage={true} />
        <Card content={props.articles.story2.content}  giveThisColor="block"   
          cardContent="cards-story-content" authorName="story-author" author={props.articles.story2.author} showImage={false}/>
      </div>

        <div className="secondary-cards">
            <Story content={props.articles.story3.content} author={props.articles.story3.author} 
             storyContent="story-story-content" storyAuthorName="story-story-author" showImage={false}/>
            <Story content={props.articles.story4.content} author={props.articles.story4.author} 
            storyContent="story-story-content"  storyAuthorName="story-story-author"  showImage={false} />
            <Story content={props.articles.story5.content} author={props.articles.story5.author} 
            storyContent="story-story-content"  storyAuthorName="story-story-author"  showImage={false}/>
            <Story content={props.articles.story6.content} author={props.articles.story6.author} 
            storyContent="story-story-content"  storyAuthorName="story-story-author" showImage={false}/>
       </div>

     </div>
    </div>

</div>


      );
}


export default App;

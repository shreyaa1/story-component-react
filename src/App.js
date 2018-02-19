import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




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

    const stories = {
      story1: story1,
      story2: story2,
      story3: story3,
      story4: story4,
      story5: story5,
      story6: story6


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


const Card = (props) => {
  const cardImage = props.showImage ? <img src="https://i.pinimg.com/474x/10/96/53/109653ffcec20fba4fde294af1cda9df--email-templates-best-practice.jpg" 
  alt="Two_girls_speaking_to_each_other" /> : null;
  return (

           <div className = 'card'>
              {cardImage}
              <p>{props.content}</p>
              <p>{props.author}</p>


           </div>
    );
}

const Story = (props) => {
    return (

           <div className = 'Story'>
              <p>{props.content}</p>
              <p>{props.author}</p>


           </div>
    );
}



  const Stories = (props) => {
    return(
  <div className="container">
      <h1 className="title">Politics</h1>

       <div className="cards">
      <div className="primary-cards">
        <Card content={props.articles.story1.content} author={props.articles.story1.author} showImage={true} />
        <Card content={props.articles.story2.content} author={props.articles.story2.author} showImage={false}/>
      </div>

        <div className="secondary-cards">
            <Story content={props.articles.story3.content} author={props.articles.story3.author} showImage={false}/>
            <Story content={props.articles.story4.content} author={props.articles.story4.author} showImage={false} />
            <Story content={props.articles.story5.content} author={props.articles.story5.author} showImage={false}/>
            <Story content={props.articles.story6.content} author={props.articles.story6.author} showImage={false}/>
       </div>
     </div>
    </div>

      );
}


export default App;

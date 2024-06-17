// src/NewsComponent.js

import React, { useContext } from 'react';
import { NewsContext } from './NewsProvider';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './NewsComponent.css'; // Import your custom CSS for styling
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
const NewsComponent = () => {
    const { newsData, overallSentiment } = useContext(NewsContext);

    if (!newsData) {
      return <p>Loading...</p>;
    }
  
    // Determine color and icon based on sentiment
    let sentimentColor = 'black';
    let sentimentIcon = null;
    if (overallSentiment === 'Bullish') {
      sentimentColor = 'rgb(100, 222, 165)'; // Green
      sentimentIcon = <TrendingUpIcon style={{ fontSize: 25, color: sentimentColor }} />;
    } else if (overallSentiment === 'Neutral') {
      sentimentColor = 'yellow'; // Yellow
      sentimentIcon = <TrendingFlatIcon style={{ fontSize: 25, color: sentimentColor }} />;
    } else if (overallSentiment === 'Bearish') {
      sentimentColor = 'red'; // Red
      sentimentIcon = <TrendingDownIcon style={{ fontSize: 25, color: sentimentColor }} />;
    }
  

  return (
    <div className="carousel-container">
      
      <Carousel
        autoPlay
        interval={5000}
        showArrows
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="arrow-prev">
              &#9664;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="arrow-next">
              &#9654;
            </button>
          )
        }
        showStatus={false}
        showThumbs={false} // Hide the navigation dots
        infiniteLoop
        swipeable
        emulateTouch
      >
        
        {newsData.feed.map((item, index) => (
            
          <div key={index} className="carousel-slide">
            
            <div className="carousel-image" style={{ backgroundImage: `url(${item.banner_image})` }}>
              <div className="carousel-text">
                <div className='topright'>
                    <div className='bbg'>
                        <span>The markets are </span>&nbsp;<span style={{color:sentimentColor,fontWeight:"600"}}>{overallSentiment}</span>
                    </div>
                    <div className='bbg' style={{padding:"2px;",margin:"0px 5px",borderRadius:"20px"}}>
                        {sentimentIcon}
                    </div>
              </div>
              <div className='bottomleft'>
              <span className='spantx'>What you need to know</span>
                <h3 style={{margin:"4px 5px"}}>{item.title}</h3>
                
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
                  Go to news
                </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsComponent;

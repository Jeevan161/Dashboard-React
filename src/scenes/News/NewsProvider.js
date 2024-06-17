// NewsContext.js

import React, { createContext, useState, useEffect } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState(null);
  const [overallSentiment, setOverallSentiment] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo');
        const data = await response.json();
        
        console.log('Fetched data:', data); // Log fetched data

        setNewsData(data);

        const sentimentScores = data.feed.map(item => item.overall_sentiment_score);
        const avgSentiment = sentimentScores.reduce((acc, score) => acc + score, 0) / sentimentScores.length;

        if (avgSentiment >= 0.35) {
          setOverallSentiment('Bullish');
        } else if (avgSentiment >= 0.15) {
          setOverallSentiment('Bullish');
        } else if (avgSentiment > -0.15) {
          setOverallSentiment('Neutral');
        } else if (avgSentiment > -0.35) {
          setOverallSentiment('Bearish');
        } else {
          setOverallSentiment('Bearish');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <NewsContext.Provider value={{ newsData, overallSentiment }}>
      {children}
    </NewsContext.Provider>
  );
};

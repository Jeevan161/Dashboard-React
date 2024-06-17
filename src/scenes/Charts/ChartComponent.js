// src/ChartComponent.js

import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Button, ButtonGroup } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../../theme'; // Assuming you have a theme file for color tokens

const API_KEY = '4TsK7DqvMHbfkmRR8UpqI70T09gk8I99s';

const fetchData = async (symbol, interval) => {
  try {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/historical-chart/${interval}/${symbol}?apikey=${API_KEY}`);
    const data = await response.json();

    // Log the fetched data to debug
    console.log('Fetched data:', data);

    if (!Array.isArray(data)) {
      throw new Error('Fetched data is not an array');
    }

    const chartData = data.map((entry) => ({
      date: entry.date,
      price: entry.close,
    }));

    return chartData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const ChartComponent = ({ symbol }) => {
  const [data, setData] = useState([]);
  const [interval, setInterval] = useState('5min');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(symbol, interval);
      setData(result);
    };
    getData();
  }, [symbol, interval]);

  const handleIntervalChange = (newInterval) => {
    setInterval(newInterval);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: colors.primary[900], borderRadius: '8px' }}>
      <h2>Stock Chart for {symbol}</h2>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ marginBottom: '20px' }}>
        {['1min', '5min', '15min', '30min', '1hour'].map((range) => (
          <Button
            key={range}
            onClick={() => handleIntervalChange(range)}
            style={{ backgroundColor: interval === range ? colors.primary[500] : colors.primary[700] }}
          >
            {range}
          </Button>
        ))}
      </ButtonGroup>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={colors.primary[200]} />
          <XAxis dataKey="date" stroke={colors.primary[100]} />
          <YAxis stroke={colors.primary[100]} />
          <Tooltip
            contentStyle={{ backgroundColor: colors.primary[800], borderColor: colors.primary[700] }}
            labelStyle={{ color: colors.primary[100] }}
            itemStyle={{ color: colors.primary[100] }}
          />
          <Legend
            wrapperStyle={{ color: colors.primary[100] }}
          />
          <Line type="monotone" dataKey="price" stroke={colors.primary[500]} strokeWidth={2} dot={{ r: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;

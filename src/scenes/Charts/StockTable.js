// StockTable.js

import React,{useContext} from 'react';
import './StockTable.css'; // Import CSS for styling

import { Box, IconButton, useTheme} from "@mui/material";
import { ColorModeContext,tokens  } from '../../theme';
const StockTable = ({ selectedSymbol, onSymbolClick }) => {
    const stocks = ['IBM', 'AAPL', 'GOOGL', 'MSFT', 'AMZN']; // Default stocks

    const handleSymbolClick = (symbol) => {
        onSymbolClick(symbol); // Notify parent component
    };
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode  = useContext(ColorModeContext);
  

    return (
        <div className="stock-table-container">
            <h2 style={{color:`${colors.primary[100]}`}}> Stock Table</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{color:`${colors.primary[100]}`}}>Symbol</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((symbol, index) => (
                        <tr
                        style={{color:`${colors.primary[100]}`}}
                            key={index}
                            onClick={() => handleSymbolClick(symbol)}
                            className={selectedSymbol === symbol ? 'selected' : ''}
                        >
                            <td>{symbol}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockTable;

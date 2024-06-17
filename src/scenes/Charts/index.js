// ChartComponent.js

import React, { useState,useContext } from 'react';
import "./charts.css";
import LiveChart from './LiveChart';
import StockTable from './StockTable';

import { Box, IconButton, useTheme} from "@mui/material";
import { ColorModeContext,tokens  } from '../../theme';


const ChartComponent = () => {
   const [selectedSymbol, setSelectedSymbol] = useState('IBM'); // Default selected symbol
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const colorMode  = useContext(ColorModeContext);
 
    const handleSymbolClick = (symbol) => {
        setSelectedSymbol(symbol); // Update selected symbol in state
    };

    return (
        <div className='CharCont' style={{background:`${colors.grey[900]}`,boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
            <div className='left-panel'>
                <StockTable onSymbolClick={handleSymbolClick} selectedSymbol={selectedSymbol} />
            </div>
            <div className='right-panel'>
                <LiveChart symbol={selectedSymbol} />
            </div>
        </div>
    );
};
export default ChartComponent;

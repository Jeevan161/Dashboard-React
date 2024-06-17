import React, { useEffect, useMemo,useContext, useState } from 'react'
import { fetchStockData } from './Service'
import { formatStockData } from './utils.js'
import ReactApexChart from 'react-apexcharts'
import { candleStickOptions } from './constants'

import { Box, IconButton, useTheme} from "@mui/material";
import { ColorModeContext,tokens  } from '../../theme';
const LiveChart = ({ symbol }) => {
    const [stockData, setStockData] = useState({})
    
    useEffect(() => {
        fetchStockData(symbol).then(data =>
            setStockData(data)
        )
    }, [])
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode  = useContext(ColorModeContext);
  
    const seriesData = useMemo(() => formatStockData(stockData), [stockData])

    return (
        <ReactApexChart style={{color:`${colors.primary[100]} !important`}}
            series={
                [
                    {
                        data: seriesData
                    }
                ]
            }
            options={candleStickOptions}
            type="candlestick"
            
        />
    )
}

export default LiveChart
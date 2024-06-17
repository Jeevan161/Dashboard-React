// src/YourComponent.js

import React, { useContext } from 'react';
import { SectorsContext } from './SectorsProvider';
import "./table.css"
import { Box, IconButton, useTheme} from "@mui/material";
import { ColorModeContext,tokens  } from '../../theme';
import { motion } from "framer-motion"
const YourComponent = () => {
  const sectors = useContext(SectorsContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode  = useContext(ColorModeContext);

  return (
    <motion.div {...framerSection} className='contt' style={{background:`${colors.grey[900]}`,boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
      <div className='head'>
        <h1 style={{color:`${colors.primary[100]}`}}>Sectors Performance</h1>
      </div>
      <div className='divCont'>
        {sectors.slice(0, 10).map((sector, index) => {
          const change = parseFloat(sector.changesPercentage.replace('%', ''));
          const isPositive = change > 0;
          const formattedChange = isPositive ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`;
          const backgroundGradient = isPositive
            ? 'linear-gradient(90deg, rgba(43,43,58,0.5691526610644257) 96%, rgba(122,222,127,1) 100%)'
            : 'linear-gradient(90deg, rgba(43,43,58,0.5691526610644257) 96%,rgba(255,0,0,1) 100%)';

          return (
            <motion.div {...framerTItems}
              key={index}
              className='itemT'
              style={{ background: backgroundGradient }}
            >
              <div className='sname' style={{color:`${colors.primary[100]}`}}>
                {sector.sector}
              </div>
              <div className='spercentage' style={{color: isPositive ? 'green' : 'red'}}>
                {formattedChange}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
const framerSection = {
  initial: { opacity: 0,scale:1 ,x:-50,y:0 },
  animate: { opacity: 1 ,scale:1,x:0,y:0},
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.5 },
  
}
const framerTItems = {
  initial: { opacity: 0,scale:1 ,x:-50,y:-80 },
  animate: { opacity: 1 ,scale:1,x:0,y:0},
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.5 },
  
}
export default YourComponent;

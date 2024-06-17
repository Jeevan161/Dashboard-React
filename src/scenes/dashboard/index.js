import React from 'react';
import { NewsProvider  } from "../News/NewsProvider.js";
import News from "../News/index.js";
import "./dashboard.css"
import { SectorsProvider } from "../sectorData/SectorsProvider.js"
import Sector  from "../sectorData/index.js"
import Charts from "../Charts/index.js"
import Test from "../Charts/index.js"
const Index = () => {
    return (
        <div class="parent">
            <div class="div1">
                <NewsProvider>
                    <News/>
                </NewsProvider>
            </div>
            <div class="div2"> 
                 <SectorsProvider>  
                    <Sector/>
              </SectorsProvider>
            </div>
            <div class="div3"> 
                <div className='tetts'>
                <Test/>
                </div>
            </div>
        </div>
            
    );
}

export default Index;

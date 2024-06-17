import React from 'react';
import { Box, IconButton, useTheme} from "@mui/material";
import { ColorModeContext,tokens  } from '../../theme';
import { useContext } from 'react';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';import SearchIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { IoCompassOutline } from "react-icons/io5";
import { motion } from "framer-motion"
import { PiPresentationChart} from "react-icons/pi";
import { FaRegCompass } from "react-icons/fa6";
import { MdOutlineBookmarkAdd } from "react-icons/md";


const Topbar = () => {
   
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode  = useContext(ColorModeContext);
    const today = new Date();
return (
   <Box display="flex" justifyContent="space-between" p={2}>
    <Box style={{padding:"0px 5%"}}>
     <motion.text ><span style={{fontWeight:"600",fontSize:"1.5rem",color:`${colors.primary[100]}`}}>Hello, Jane</span></motion.text><br></br>
     <motion.text><span style={{fontWeight:"400",color:"#696977",fontSize:"0.95rem"}}>{formatDate(today)}</span></motion.text>
     </Box>
        <Box display="flex" >
            
                    <motion.div {...iconMotion} transition={{ delay: 0.3}}>
                        <IconButton sx={{
                            background:`${colors.primary[300]}`,
                            padding:" 6px 8px ",
                            margin:"10px",
                            borderRadius:"100px",
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
                        }}>
                        <SearchIcon/>
                        <Box sx={{fontSize:"14px",padding:"0px 5px 0px 8px"}}>Search</Box>
                        </IconButton>
                    </motion.div>
           
            <motion.div {...iconMotion} transition={{ delay: 0.7}}>
                <IconButton onClick={colorMode.toggleColorMode} sx={{
                    background:`${colors.primary[300]}`,
                    padding:" 6px 8px ",
                    margin:"10px",
                    borderRadius:"100px",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
                }}>
                {theme.palette.mode === 'dark'?(
                    <DarkModeOutlinedIcon/>):(<LightModeOutlinedIcon/>)
                }
                </IconButton>
            </motion.div>
        </Box>
   </Box>
);}
const iconMotion ={
    initial  :{ opacity:0 ,y:0,x:20},
    animate :{ opacity:1 ,y:0,x:0},
    transition: { delay: 0.1,duration:0.75,type:'linear' },
}
export function formatDate(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

export default Topbar;

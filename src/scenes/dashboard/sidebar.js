import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import { GoHome } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { GoBook } from "react-icons/go";
import { GoBookmark } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAliwangwang } from "react-icons/ai";


import { motion } from "framer-motion"

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-sidebar .pro-menu .pro-menu-item > .pro-inner-item > .pro-icon-wrapper": {
          fontSize:"18px !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 12px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout":
        {
            justifyContent:"center !important"
        },
        "& pro-sidebar-layout":
        {
            display:"flex !important",
            flexDirection:"column"
        },
        ".logo-s" :
        {
            justifyContent: "flex-start",
            flexGrow: "1",
            height:"0"
        },
        "& .pro-sidebar .pro-menu": {
            flexGrow:"1"
        },
        "& .pro-sidebar.collapsed": {
            width:"60px !important",
            position:"fixed",
            height:"100vh",
            boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.8) 0px 0px 0px 1px !important" ,
            minWidth:"60px !important",
        },
        ".css-17w9904-MuiTypography-root":
        {
            lineHeight:"3rem"
        },
        "& .pro-sidebar":
        {
            position:"fixed"
        },
        // "& .css-1hp1jx .pro-sidebar.collapsed":
        // {
        //     position:"fixed",
        //     height:"100vh"
        // },
        ".css-17w9904-MuiTypography-root":
        {
            lineHeight:"3rem"
        }
      }}
    >
        
      <ProSidebar collapsed={isCollapsed}>
        <motion.div {...framerSidebarBackground} className="logo-s">
        <Menu iconShape="square">
        <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <AiOutlineAliwangwang /> : <IoMdClose />}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
          </MenuItem></Menu>
      
      </motion.div>   
        <Menu iconShape="square">
        <motion.div {...framerSidebarBackground}>
          {/* LOGO AND MENU ICON */}
          <Box {...framerIcon} paddingLeft={isCollapsed ? undefined : "10%"}>
            <motion.div {...framerIcon} >
            <Item  
              title="Dashboard"
              to="/"
              icon={<GoHome />}
              selected={selected}
              setSelected={setSelected}
              ></Item>
              </motion.div>
              <motion.div {...framerIcon} >
            <Item
              title="Search"
              to="/"
              icon={<GoSearch />}
              selected={selected}
              setSelected={setSelected}
            />
            </motion.div>
            <motion.div {...framerIcon} >
            <Item
              title="Contact us "
              to="/"
              icon={<GoBook />}
              selected={selected}
              setSelected={setSelected}
            />
            </motion.div>
            <motion.div {...framerIcon} >
            <Item
              title="Portfolio"
              to="/"
              icon={<GoBookmark  />}
              selected={selected}
              setSelected={setSelected}
            />
            </motion.div>
            <motion.div {...framerIcon} >
            <Item
              title="Setting"
              to="/"
              icon={<IoSettingsOutline  />}
              selected={selected}
              setSelected={setSelected}
            />
            </motion.div>
          </Box>
          </motion.div>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

  
  const framerSidebarBackground = {
    initial: { opacity: 0,scale:1 ,x:-50,y:0 },
    animate: { opacity: 1 ,scale:1,x:0,y:0},
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.5 },
    
  }
  
  const framerSidebarPanel = {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
    transition: { duration: 0.3 },
  }
  
  const framerText = delay => {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    }
  }
  
  const framerIcon = {
    initial: { scale: 0 },
    animate: { scale: 1},
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 1,
    },
  }

export default Sidebar;
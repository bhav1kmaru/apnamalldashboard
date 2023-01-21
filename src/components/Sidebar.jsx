import React, { useContext, useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/apnaLogoFinal.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)
  const {setIsAuth}=useContext(AuthContext)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" style={{height:'80px',padding:"10px"}} />
        
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <Link to={item.path}>
                <item.icon color='black' />
              </Link>
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div onClick={()=>setIsAuth(false)} className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;

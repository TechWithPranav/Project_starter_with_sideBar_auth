import React,{useState} from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/imgs/logo.png'
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {

    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true)

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
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
           const path = item.heading === "Dashboard" ? "/" : `/${item.heading.toLowerCase()}`;
          return (

            // <Link to={path} key={index} onClick={() => setSelected(index)} style={{ textDecoration: 'none' }}>
            <Link
              className={selected === index ? "menuItem active" : "menuItem"}
              to={path}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </Link>
            // </Link>

          );
        })}
        {/* signoutIcon */}


        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div> 



      {/* <div className="menu">
                    {SidebarData.map((item, index) => {
                        const path = item.heading === "Dashboard" ? "/" : `/${item.heading.toLowerCase()}`;
                        return (
                            <Link to={path} key={index} onClick={() => setSelected(index)} style={{ textDecoration: 'none' }}>
                                <div className={selected === index ? "menuItem active" : "menuItem"}>
                                    <item.icon />
                                    <span>{item.heading}</span>
                                </div>
                            </Link>
                        );
                    })}
                   
                    <div className="menuItem">
                        <UilSignOutAlt />
                    </div>
                </div> */}


      </motion.div>
      </>
  )
}

export default Sidebar
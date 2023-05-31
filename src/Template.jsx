import React, {useEffect, useState} from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FaFilter, FaHome, FaList, FaSun, FaMoon } from "react-icons/fa";

// COMPONENTS
import { Switch } from '@mui/material';


function Template() {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('dark-mode', !darkMode)
    }

    useEffect(()=>{
        let isDarkMode = localStorage.getItem('dark-mode')
        isDarkMode && setDarkMode(JSON.parse(isDarkMode))
    },[])

    const navigate = useNavigate()

    return (
        <div id='body' className={darkMode ? 'dark' : 'light'}>
            <nav>
                <div className="container">
                    <ul>
                        <li>
                            <NavLink to={"/"}>                         
                                <FaHome 
                                    size={20}
                                    className='nav-icon'
                                />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/filter"}>                      
                                <FaFilter 
                                    size={15}
                                    className='nav-icon'
                                />
                                <span>Filter</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>
                                <FaList
                                    size={15}
                                    className='nav-icon'
                                />
                                <span>About</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div id='themeToggler' onClick={toggleDarkMode}>
                        <span className='theme-label'>Dark mode</span>
                        <FaMoon
                            size={20}
                            className='theme-icon'
                        />
                        <Switch size='small' onChange={toggleDarkMode} checked={darkMode}/>
                    </div>
                </div> 
            </nav>
            {<Outlet />}
            <footer>
                <div className="container">
                    <p>-- -- --</p>
                    <p>Arusha Technical college</p>
                    <p>Copyright &copy; 2023 Faraji Kajubu</p>
                </div>
            </footer>
        </div>
    )
}

export default Template
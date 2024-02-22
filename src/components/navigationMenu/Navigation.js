import './navigation.css'
import { Link } from 'react-router-dom';
import React,{useState} from 'react';
const Navigation = () => {
    const navigationItems = [
        {
            item: 'Home',
            to: '*'
        },
        {
            item: 'About Me',
            to: '/aboutMe'
        },
        {
            item: 'Portfolio',
            to: '/portfolio'
        }
    ]
    const [navBar,setNavbar]=useState(false)
    const handleNavbar = () => {
        setNavbar(navBar ? false : true)
    }
    return (
        <div className='navigation'> 

            <div className='name'><Link to='/'>Mohan</Link></div>

            <div  className={navBar ? "navigation-items  " : "active-item navigation-items "}>
                {
                    navigationItems.map((value) => {
                        return (
                            <div key={Math.random()} className='items'>
                                <Link to={value.to}  onClick={() => setNavbar(false)}>{value.item}</Link>
                            </div>
                        )
                    })
                }
                <div>
                    <Link to='/contact'>
                        <button className='pointer' onClick={() => setNavbar(false)}>Contact Me</button>
                    </Link>
                </div>
                <div>
                    <i className="fa-regular fa-moon moon"  onClick={() => setNavbar(false)}></i>
                    <i className="fa-solid fa-xmark xmark" onClick={() => setNavbar(false)}></i>
                </div>
                
            </div>

            <i  className={navBar ? "fas fa-times nav-bar" : "fas fa-bars nav-bar"} onClick={handleNavbar}></i>
            
        </div>
    )
}
export default Navigation;
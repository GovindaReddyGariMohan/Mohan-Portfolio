import './home.css'
import Profile from '../Photo/profilePhoto';
import { Link } from 'react-router-dom';
import Resume from '../../assets/mohanPortfolio.pdf'
import React from 'react';
const PortfoilHome = () => {
    const profileDetails = [
        {
            details: 'Govinda Reddy Gari Mohan', 
            className: 'profile-name'
        },
        {
            details: 'junior frontend & React Js developer',
            className:'position'
        },
        
    ]
    const icons = [
        {
            icon: 'fa-brands fa-github',
            link: 'https://github.com/GovindaReddyGariMohan'
        },
        {
            icon: 'fa-brands fa-linkedin',
            link: 'https://www.linkedin.com/in/govinda-reddy-gari-mohan-00539623b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            icon: 'fa-brands fa-instagram',
            link: 'https://www.instagram.com/mohan_93900?igsh=MXcyY3F4NHVxYWZldQ=='
        }
    ]
    return (
        <div className='Home-page'>
            <div className='home-left'></div>
            <div className='home-right'></div>
            <div className='profile-details'>
                <div>
                    <Profile />
                </div>
                <div>
                    {
                        profileDetails.map((value, index) => {
                            return (
                                <div className={value.className} key={index}>{value.details}</div>
                            )
                        })
                    }
                    <div className='download-cv pointer'>
                       <a href={Resume} download="Mohanresume">Download cv</a>
                    </div>
                </div>
                <div className='social-links'>
                    {
                        icons.map((value) => {
                            return (
                                <div key={value.icon}>
                                    <Link to={value.link} target="_blank"><i className={value.icon}></i></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PortfoilHome;
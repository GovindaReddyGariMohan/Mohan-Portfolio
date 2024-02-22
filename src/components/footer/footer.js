import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    const details = [
        {
            item: 'About Me',
            link:'/aboutMe'
        },
        {
            item: 'Portfolio',
            link:'/portfolio'
        },
        {
            item: 'Contact Me',
            link:'/contact'
        }
    ]
    const socialLink = [
        {
            icon: 'fa-brands fa-facebook',
            link:'https://www.facebook.com/profile.php?id=100041279379471&mibextid=ZbWKwL'
        },
        {
            icon: 'fa-brands fa-instagram',
            link:'https://www.instagram.com/mohan_93900?igsh=MXcyY3F4NHVxYWZldQ=='
        },
        {
            icon: 'fa-brands fa-github',
            link:'https://github.com/GovindaReddyGariMohan'
        },
        {
            icon: 'fa-brands fa-linkedin',
            link:'https://www.linkedin.com/in/govinda-reddy-gari-mohan-00539623b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        }
    ]
    return (
        <div className='footer'>
            <div className='footer-details'>
                <div>Mohan</div>
                <div className='footer-router'>
                    {
                        details.map((value) => {
                            return (
                                <Link key={Math.random()} to={value.link}>{value.item}</Link>
                            )
                        })
                    }
                </div>
                <div className='footer-icons'>
                    {
                        socialLink.map((value) => {
                            return (
                               <Link to={value.link} target="_blank"><i className={value.icon} key={Math.random()}></i></Link> 
                            )
                        })
                    }
                </div>
            </div>
            <div>
                @ All Rights Reserved
            </div>
        </div>
    )
}
export default Footer;
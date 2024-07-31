import './aboutMe.css'
import Profile from '../Photo/profilePhoto';
import { Link } from 'react-router-dom';
import React from 'react';
import Footer from '../footer/footer';
const About = () => {
    const profileDetails = [
        {
            details: 'Govinda Reddy Gari Mohan',
            className: 'about-profile-name',
            key:'details-1'
        },
        {
            details: 'junior frontend & React Js developer',
            className:'position',
            key:'details-2'
        },
        {
            details: 'Passionate about creating Web Pages with UI/UX User Interface',
            key:'details-3'
        },
        {
            details: 'Contact Me',
            className: 'contact-me pointer',
            link:'/contact',
            key:'details-4'
        }
    ]
    const skills = [
        {
            skill: 'fa-brands fa-html5 html',
            className:'html',
            title:'HTML',
            key:'details-5'
        },
        {
            skill: 'fa-brands fa-css3-alt css',
            className:'css',
            title:'CSS',
            key:'details-6'
        },
        {
            skill:'fa-brands fa-js js',
            className:'js',
            title:'JS',
            key:'details-7'
        },
        {
            skill:'fa-brands fa-react react',
            className:'react',
            title:'React Js',
            key:'details-8'
        },
        {
            skill:'fa-brands fa-github github',
            className:'github',
            title:'github',
            key:'details-9'
        },
        {
            skill:'fa-brands fa-node-js node',
            className:'node',
            title:'Node Js',
            key:'details-10'
        },
        {
            skill:'fa-brands fa-vuejs vue',
            title:'Vue Js',
            key:'details-11'
        },
        {
            skill:'fa-brands fa-sass sass',
            title:'SASS',
            key:'details-12'
        },
        {
            skill:'fa-brands fa-sass sass',
            title:'Express Js',
            key:'details-13'
        },
        {
            skill:'fa-brands fa-sass sass',
            title:'Mongo Db',
            key:'details-14'
        }
    ]
    return (
        <>
        <div className='about-page-position'>
            <h2 className='about-title'>My Personal <br />Information</h2>
            <div className='about'>
                <div><Profile /></div>
                <div className='about-details'>
                    {
                        profileDetails.map((value) => {
                            return (
                                <Link to={value.link} key={value.key}><div className={value.className} >{value.details}</div></Link>
                            )
                        })
                    }
                    <div className='my-skills' key='details-13'>My skills are</div>
                    {
                        skills.map((value)=>{
                            return(
                                <i className={value.skill} title={value.title} key={value.key}></i>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About;

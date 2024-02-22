import { Link } from 'react-router-dom'
import './projects.css'
import React from 'react';
import Footer from '../footer/footer';
const Projects = () => {
    const projectDetails = [
        {
            imag: 'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg',
            title: 'Mohan Store',
            link: 'https://govindareddygarimohan.github.io/mohan-store/'
        },
        {
            imag: 'https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg',
            title: 'Mohan Tours',
            link: 'https://govindareddygarimohan.github.io/tours-travels/'
        },
        {
            imag: 'https://t4.ftcdn.net/jpg/03/53/16/23/360_F_353162391_nHMc5RZfQkMWYYTIdTtMQfMrFqgYFoPt.jpg',
            title: 'Todo App',
            link: 'https://govindareddygarimohan.github.io/TodoApp/'
        },
        {
            imag: 'https://i.pinimg.com/originals/96/8e/4a/968e4a639cbbcf2a4a5858c0e2e9413d.png',
            title: 'Restourent Menu Applications'
        }
    ]
    return (
        <>
        <div className="projects">
            <div className='project-page-title'>My Most <br />Recent Works</div>
            <div className='project-details'>
                {
                    projectDetails.map((value) => {
                        return (

                            <Link to={value.link} key={Math.random()} target="_blank">
                                <img src={value.imag} alt='imag'  />
                                <div>{value.title}</div>
                            </Link>

                        )
                    })
                }
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default Projects;
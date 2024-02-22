import './profilePhoto.css'
import Photo from '../../assets/mohan-imag.jpeg'
import React from 'react';
const Profile=()=>{
    return(
        <div className='profile-photo-structure'>
            <div className='profile-photo'>
                <img src={Photo} alt='imag'/>
            </div>
        </div>
    )
}

export default Profile;
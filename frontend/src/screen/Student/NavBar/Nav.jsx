import React from 'react';
import './navbar.css'
import home from './navbar_images/Home.png'
import classes from './navbar_images/Class.png'
import enroll from './navbar_images/Enroll.png'
import pay from './navbar_images/Pay.png'
import time from './navbar_images/Time.png'
import attendance from './navbar_images/Attendance.png'
import qa from './navbar_images/Qa.png'
import feedback from './navbar_images/Feedback.png'
import profile from './navbar_images/Profile.png'
import wallet from './navbar_images/Wallet.png'
import logout from './navbar_images/Logout.png'
import axios from 'axios'

function Nav() {

    const handleDeletetoken = () => {
        axios.get('/logout').then(res => {
            console.log(res);
            window.location.href = '/';
        }).catch(err => console.log(err));
    }


  return (
    <div>
       <div className='sidenavbar'>                
                <ul className='sidenavbarul'>
                    <li>
                        <img src={home} alt='home' className='navimage'/>
                        <a href='/studentdashboard'>Dashboard</a>
                    </li>
                    <li>
                        <img src={classes} alt='home' className='navimage'/>
                        <a href='/test'>My Classes</a>
                    </li>
                    {/* <li>
                        <img src={classes} alt='home' className='navimage'/>
                        <a href='/lessonmaterial'>Lesson Material</a>
                    </li> */}
                    
                    <li>
                        <img src={pay} alt='home' className='navimage'/>
                        <a href='/viewonline'>Payment</a>
                    </li>
                    <li>
                        <img src={time} alt='home' className='navimage'/>
                        <a href='/studenttimetable'>TimeTable</a>
                    </li>
                    <li>
                        <img src={attendance} alt='home' className='navimage'/>
                        <a href='/AttendStudent'>Attendance</a>
                    </li>
                    <li>
                        <img src={qa} alt='home' className='navimage'/>
                        <a href='/question'>Q&A</a>
                    </li>
                    <li>
                        <img src={feedback} alt='home' className='navimage'/>
                        <a href='/Feedback'>Feedbacks</a>
                    </li>
                    <li>
                        <img src={profile} alt='home' className='navimage'/>
                        <a href='/studentprofile'>Profile</a>
                    </li>
                    <li>
                        <img src={wallet} alt='home' className='navimage'/>
                        <a href='/Wallet'>Wallet</a>
                    </li>
                    <br/><br/><br/><br/>
                    <li className='logoutsq'>
                        <img src={logout} alt='home' className='navimage'/>
                        <div className='logoutbtn' onClick={handleDeletetoken}><div className='logouttxt'>Logout</div></div>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Nav

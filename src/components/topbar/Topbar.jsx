import './topbar.css'
import profilePic from '../../assets/profilepic.png'
import { Link } from 'react-router-dom';

export default function Topbar() {
    const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-x-twitter"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-spotify"></i>
            <i className="topIcon fa-brands fa-youtube"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-tiktok"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className='link' to='/home'>HOME</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/about'>ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/contact'>CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className="topListItem">
                    {user && 'LOGOUT'}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img src={profilePic} alt="" className="topImage" />
                ) : (
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link className='link' to='login'>LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                            <Link className='link' to='register'>REGISTER</Link>
                        </li>
                    </ul>
            )}            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}



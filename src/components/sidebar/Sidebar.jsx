import './sidebar.css'
import sidebarPicture from '../../assets/sidebar-pic.png'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={sidebarPicture} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Ratione provident neque dolores quaerat 
                qui labore voluptate soluta amet sit porro.
            </p>    
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Soccer</li>
                <li className="sidebarListItem">Programing</li>
                <li className="sidebarListItem">Health</li>
                <li className="sidebarListItem">Language</li>
                <li className="sidebarListItem">Short Stories</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-x-twitter"></i>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-spotify"></i>
                <i className="sidebarIcon fa-brands fa-youtube"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-brands fa-tiktok"></i>
            </div>
        </div>        
    </div>
  )
}

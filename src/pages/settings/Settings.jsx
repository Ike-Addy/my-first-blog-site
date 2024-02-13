import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import profilePicture from '../../assets/profilepic.png'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img src={profilePicture} alt="" />
                    <label htmlFor="fileInput">
                        <i class="settingsProfilePictureIcon fa-solid fa-user"></i>
                    </label>
                    <input 
                        type="file" 
                        id="fileInput"
                        style={{cursor: 'pointer', display: 'none'}}
                    />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Ike' />
                <label>Email</label>
                <input type="email" placeholder='ikea@gmail.com' />
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

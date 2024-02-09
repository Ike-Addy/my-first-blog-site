import './header.css'
import headerPhoto from '../assets/header-photo.png'

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
          <span className='headerTitleSmall'>React & Node</span>
          <span className='headerTitleLarge'>Blog</span>
        </div>
        <img className='headerImage' src={headerPhoto} alt="" />
    </div>
  )
}

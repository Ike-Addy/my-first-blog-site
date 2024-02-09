import './singlePost.css'
import runningManImage from '../../assets/running-man.png'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className='singlePostImage' src={runningManImage} alt="" />
            </div>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Ike Addy</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sequi dolore similique 
                perferendis reiciendis repellat nemo amet! Accusantium exercitationem voluptate, 
                eum animi voluptatum qui omnis incidunt porro possimus at iusto.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sequi dolore similique 
                perferendis reiciendis repellat nemo amet! Accusantium exercitationem voluptate, 
                eum animi voluptatum qui omnis incidunt porro possimus at iusto.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sequi dolore similique 
                perferendis reiciendis repellat nemo amet! Accusantium exercitationem voluptate, 
                eum animi voluptatum qui omnis incidunt porro possimus at iusto.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sequi dolore similique 
                perferendis reiciendis repellat nemo amet! Accusantium exercitationem voluptate, 
                eum animi voluptatum qui omnis incidunt porro possimus at iusto.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sequi dolore similique 
                perferendis reiciendis repellat nemo amet! Accusantium exercitationem voluptate, 
                eum animi voluptatum qui omnis incidunt porro possimus at iusto.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sequi dolore similique 
                perferendis reiciendis repellat nemo amet! Accusantium exercitationem voluptate, 
                eum animi voluptatum qui omnis incidunt porro possimus at iusto.    
            </p>
        </div>
    </div>
  )
}

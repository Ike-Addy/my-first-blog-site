import './post.css';
import computer from '../../assets/computer.png';

export default function Post() {
  return (
    <div className='post'>
        <img 
            className='postImage'
            src={computer} 
            alt="" 
        />

        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategory">Soccer</span>
                <span className="postCategory">Programming</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Voluptas distinctio ut, dolore optio sunt commodi odit, numquam, 
            modi eius tenetur debitis id magnam alias voluptate quod. 
            Fugit odit non veritatis.</p>
    </div>
  );
}

import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css'
import { Posts } from "../../dummyData"
 
function Feed() {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share />
        {
          Posts.map((post) => (
            <Post key={post.id} post = {post} />
          ))
        }      
      </div>
    </div>
  )
}

export default Feed;
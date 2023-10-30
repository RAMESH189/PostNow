import { useState } from "react";
import "./post.css"
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";


function Post({post}) {
    const { desc, photo, date, like, comment } = post;
    const profilePicture = Users.filter((user) => user.id === post.userId)[0].profilePicture;
    const userName = Users.filter((user) => user.id === post.userId)[0].username;

    const [likes, setLikes] = useState(like);
    const [isLiked, setIsLiked] = useState(false);

    const ReactionHandler = () => {
        setLikes(isLiked ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
    }

  return (
      <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                        <img src={profilePicture} alt="Post" className="postProfile" />
                      <span span className="posUsername">{userName}</span>
                      <span span className="postDate">{date}</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVert className="moreOptions"/>
                  </div>  
              </div>
              <div className="postCenter">
                  <span className="postText">{desc}</span>
                  <img src={photo} alt="Post" className="postImage" />
              </div>    
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img src="/assets/like.jpeg" alt="like" onClick={ReactionHandler} className="ReactionIcon" />
                      <img src="/assets/heart.jpg" alt="heart" onClick={ReactionHandler} className="ReactionIcon" />
                      <span className="ReactionCounter">{likes} likes</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommandText">{comment} comments</span>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Post;
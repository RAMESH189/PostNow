import "./share.css"
import { PermMedia, Label, LocationOn, EmojiEmotions } from "@mui/icons-material";

function Share() {
  return (
      <div className="share">
          <div className="shareWrapper">
              <div className="shareTop">
                  <img src="/assets/person/rdj.jpeg" alt="FeedImage" className="shareProfilePicture" />
                  <input placeholder="What's in your mind?" className="shareInput" />
              </div>
              <hr className="shareHr" />
              <div className="shareBottom">
                  <div className="shareOptions">
                      <div className="shareOption">
                          <PermMedia htmlColor="tomato" className="shareIcon"/>
                          <span className="shareOptionText">Gallery</span>
                      </div>
                      <div className="shareOption">
                          <Label htmlColor="Blue" className="shareIcon" />
                          <span className="shareOptionText">Tag</span>
                      </div>
                      <div className="shareOption">
                          <LocationOn htmlColor="Green" className="shareIcon"/>
                          <span className="shareOptionText">Location</span>
                      </div>
                      <div className="shareOption">
                          <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                          <span className="shareOptionText">Reaction</span>
                      </div>
                      <button className="shareButton">Share</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Share;
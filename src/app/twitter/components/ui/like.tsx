import { useState } from 'react'
import '@/assets/styles/like.css'

function Like() {
  const [likesCount, setLikesCount] = useState(0)
  const [liked, setLiked] = useState(false)

  const toggleDisplay = () => {
    if (likesCount === 0) {
      setLikesCount(likesCount + 1)
      setLiked(true)
    } else {
      setLikesCount(likesCount - 1)
      setLiked(false)
    }
  }

  return (
    <div className="like-app">
      <div className="heart-bg">
        <div
          className={`heart-icon ${liked ? 'liked' : ''}`}
          onClick={toggleDisplay}
        ></div>
      </div>
      <div className="likes-amount">{likesCount}</div>
    </div>
  )
}
export default Like

import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = (props) => {
  const {
    commentListDetails,
    onLikeCommentList,
    onDeleteCommentList
  } = props
  const {
    id,
    username,
    comment,
    postedTime,
    backgroundColor,
    isLike
  } = commentListDetails
  
  const isCommentLike = isLike 
    ? 
      'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 
      'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLikeText = isLike ? 'liked-text' : ''

  const getLikeCommentId = () => {
    onLikeCommentList(id)
  }

  const onGetDeleteCommentId = () => {
    onDeleteCommentList(id)
  }

  return (
    <>
      <li className="comment-list">
        <div className="comment-card">
          <div className="logo-card">
            <p className={`logo ${backgroundColor}`}>{username[0]}</p>
          </div>
          <div className="user-comment-card">
            <div className="username-card">
              <p className="username-text">{username}</p>
              <p className="time">
                {formatDistanceToNow(postedTime)}
              </p>
            </div>
            <p className="comment">{comment}</p>
          </div>
        </div>
        <div className="like-delete-card">
          <div className="like-card">
            <button
              type="button"
              className="like-button"
              onClick={getLikeCommentId}
            >
              <img
                src={isCommentLike}
                alt="like"
                className="like"
              />
            </button>
            <p className={`like-text ${isLikeText}`}>Like</p>
          </div>
          <button
            type="button"
            className="delete-button"
            data-testid="delete"
            onClick={onGetDeleteCommentId}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </li>
      <hr className="break" />
    </>
  )
}

export default CommentItem

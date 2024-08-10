import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    username: '',
    comment: '',
  }

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentListDetails={eachComment}
        onLikeCommentList={this.onLikeCommentList}
        onDeleteCommentList={this.onDeleteCommentList}
      />
    ))
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {username, comment} = this.state
    const backgroundColorClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      username,
      comment,
      postedTime: new Date(),
      backgroundColor: backgroundColorClassName,
      isLike: false,
    }
    this.setState(eachComment => ({
      commentsList: [...eachComment.commentsList, newComment],
      username: '',
      comment: '',
    }))
  }

  onLikeCommentList = id => {
    this.setState(beforeState => ({
      commentsList: beforeState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onDeleteCommentList = id => {
    const {commentsList} = this.state
    const filterdComment = commentsList.filter(
      eachCommentId => id !== eachCommentId.id,
    )
    this.setState({commentsList: filterdComment})
  }

  render() {
    const {username, comment, commentsList} = this.state
    return (
      <div className="app-main-container">
        <div className="app-container">
          <div className="container">
            <div className="form-container">
              <h1 className="main-heading head2">Comments</h1>
              <form className="form" onSubmit={this.onAddComment}>
                <p className="label">Say Something about 4.0 Technologies</p>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Your Name"
                  onChange={this.onUsername}
                  value={username}
                />
                <textarea
                  cols="30"
                  rows="5"
                  className="input-field"
                  onChange={this.onComment}
                  value={comment}
                  placeholder="Your Comment"
                />
                <button type="submit" className="button">
                  Add Comment
                </button>
              </form>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="image"
              />
            </div>
          </div>
          <hr className="break" />
          <ul className="comment-container">
            <p className="comment-text">
              <span className="count">{commentsList.length}</span>
              Comments
            </p>
            {this.renderCommentsList()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments

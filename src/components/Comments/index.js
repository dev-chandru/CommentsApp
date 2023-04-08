import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []

// Write your code here
class Comments extends Component {
  state = {
    commentsList: initialCommentsList,
    count: 0,
    name: '',
    comment: '',
    index: '',
  }

  onFilteringDeleteItem = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(eachItem => eachItem.id !== id)
    this.setState({
      commentsList: filteredList,
    })
  }

  onGettingLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onAddNewComment = event => {
    event.preventDefault()
    const {name, comment, count, index} = this.state
    const indexNum = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
      index: indexNum,
    }))
  }

  onChangeNameInput = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  render() {
    const {count, name, comment, commentsList} = this.state

    return (
      <div className="main-bg-container">
        <div>
          <h1 className="main-heading">Comments</h1>
          <div className="main-card-container">
            <div className="input-element-container">
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                  className="comment-image"
                  alt="comments"
                />
              </div>
              <form className="form-container" onSubmit={this.onAddNewComment}>
                <p className="form-heading">
                  Say something about 4.0 Technologies
                </p>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="name-input"
                  onChange={this.onChangeNameInput}
                  value={name}
                />
                <textarea
                  rows="5"
                  cols="10"
                  placeholder="Your Comment"
                  className="comments-input"
                  onChange={this.onChangeComment}
                  value={comment}
                />
                <button type="submit" className="add-button">
                  Add Comment
                </button>
              </form>
            </div>
            <hr className="horizontal-line" />
            <p className="comment-count-para">
              <span className="count-num">{count}</span> Comments
            </p>
            <ul className="list-main-container">
              {commentsList.map(eachItem => (
                <CommentItem
                  commentsDetails={eachItem}
                  key={eachItem.id}
                  onGettingLikeButton={this.onGettingLikeButton}
                  onFilteringDeleteItem={this.onFilteringDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments

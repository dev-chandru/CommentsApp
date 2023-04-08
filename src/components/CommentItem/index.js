// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentsDetails, onGettingLikeButton, onFilteringDeleteItem} = props
  const {id, name, comment, date, isLiked} = commentsDetails

  const onClickLike = () => {
    onGettingLikeButton(id)
  }

  const onDeleteItem = () => {
    onFilteringDeleteItem(id)
  }

  const textColor = isLiked ? 'blue-text' : ''

  const likedImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-items-container">
      <div className="name-date-main-container">
        <p className="name-first-letter">{name[0]}</p>
        <div className="name-comment-main-container">
          <div className="name-date-container">
            <h1 className="name">{name}</h1>
            <p className="date">{date}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-button-main-container">
        <div className="image-like-container">
          <button type="button" className="button" onClick={onClickLike}>
            <img src={likedImgUrl} alt="like" className="like-image" />
          </button>
          <p className={`like ${textColor}`}>Like</p>
        </div>
        <button
          type="button"
          className="button"
          onClick={onDeleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem

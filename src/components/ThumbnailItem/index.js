// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateActiveThumbnailImg, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const thumbnailClassName = isActive && 'active'

  const onClickThumbnail = () => {
    updateActiveThumbnailImg(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${thumbnailClassName}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem

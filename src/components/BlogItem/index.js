import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {eachBlogItem} = props
  const {id, imageUrl, title, topic, avatarUrl, author} = eachBlogItem
  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blogItem-container">
          <img className="blog-img" src={imageUrl} alt="image_url" />
          <div className="blog-details">
            <p className="topic-heading">{topic}</p>
            <h1 className="title-heading">{title}</h1>
            <div className="blog-profile">
              <img className="avatar-img" alt="avatar-img" src={avatarUrl} />
              <p className="topic-heading">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem

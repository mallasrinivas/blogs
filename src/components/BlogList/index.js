import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {
    isLoading: true,
    blogData: [],
  }

  componentDidMount() {
    this.fetchBlogItems()
  }

  fetchBlogItems = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    console.log(formattedData)
    this.setState({blogData: formattedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <div className="blog-list-items-container">
        {isLoading ? (
          <div testId="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogData.map(eachBlogItem => (
              <BlogItem eachBlogItem={eachBlogItem} key={eachBlogItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList

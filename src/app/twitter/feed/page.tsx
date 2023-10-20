'use client'
import MenuFeed from '@/app/twitter/feed/menu'
import Post from '@/app/twitter/feed/post'
import ToolBarFeed from '../components/element-post/tool-bar-feed'
import NewPost from './new-post'

function FeedPage() {
  return (
    <div className="w-[598px] h-fit  flex border-[#2f3336] border-[1px]">
      <div className="w-full border-[#2f3336] ">
        <MenuFeed></MenuFeed>
        <div className="flex border-b-[1px] border-[#2f3336] w-full mt-2">
          <NewPost />
        </div>
        <div>
          <Post></Post>
        </div>
      </div>
    </div>
  )
}

export default FeedPage

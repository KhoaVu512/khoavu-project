'use client'
import MenuFeed from '@/app/twitter/feed/menu'
import Post from '@/app/twitter/feed/post'
import ToolBar from './tool-bar'

function FeedPage() {
  return (
    <div className="w-[598px] flex border-[#2f3336] border-[1px]">
      <div className="w-full border-[#2f3336] ">
        <MenuFeed></MenuFeed>
        <Post></Post>
        <ToolBar />
      </div>
    </div>
  )
}

export default FeedPage

'use client'
import MenuFeed from '@/app/twitter/feed/menu'
import Post from '@/app/twitter/feed/post'
import NewPost from './new-post'
import ToolBarFeed from './tool-bar-feed'

function FeedPage() {
  return (
    <div className="w-[598px] h-screen flex border-[#2f3336] border-[1px]">
      <div className="w-full border-[#2f3336] ">
        <MenuFeed></MenuFeed>
        <div className="flex border-b-[1px] border-[#2f3336] w-full mt-2">
          <NewPost />
        </div>
        <div className=" hover:bg-gray-900 pt-2 border-b-[1px] border-[#2f3336] pb-2">
          <Post></Post>
          <ToolBarFeed />
        </div>
      </div>
    </div>
  )
}

export default FeedPage

'use client'
import MenuFeed from '@/app/twitter/feed/menu'
import Post from '@/app/twitter/feed/post'
import NewPost from './new-post'
import ToolBarFeed from './tool-bar-feed'
import Link from 'next/link'

function FeedPage() {
  return (
    <div className="w-[598px] flex border-[#2f3336] border-[1px]">
      <div className="w-full border-[#2f3336] ">
        <MenuFeed></MenuFeed>
        <div className="flex border-b-[1px] border-[#2f3336] w-full mt-2">
          <NewPost />
        </div>
        <div className=" hover:bg-gray-900">
          <div className="pt-2">
            <Link href={'/twitter/post'}>
              <Post></Post>
            </Link>
            <ToolBarFeed />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedPage

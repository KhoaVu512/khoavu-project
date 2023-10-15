import MenuFeed from '@/app/twitter/feed/menu'
import Post from '@/app/twitter/feed/post'

function FeedPage() {
  return (
    <div className="w-[598px] flex border-blue-400 border-[1px]">
      <div className="w-full border-gray-400 ">
        <MenuFeed></MenuFeed>
        <Post></Post>
      </div>
    </div>
  )
}

export default FeedPage

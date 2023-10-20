import PostItem from '@/app/twitter/components/feed/post-item'
import { Post } from '@/app/twitter/components/types'
import ToolBarFeed from '@/app/twitter/components/element-post/tool-bar-feed'

function PostList(Props: any) {
  const { items } = Props

  return (
    <div>
      {items.map((event: any) => (
        <div className='hover:bg-gray-900 pt-4 pb-4  border-b-[1px] border-[#2f3336]'>
          <PostItem
            key={event.id}
            id={event.id}
            content={event.content}
            image={event.image}
            name={event.name}
            time={event.time}
            nameId={event.nameId}
            like={event.like}
          />
          <ToolBarFeed />
        </div>
      ))}
    </div>
  )
}

export default PostList

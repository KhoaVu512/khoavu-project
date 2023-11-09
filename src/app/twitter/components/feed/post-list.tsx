import PostItem from '@/app/twitter/components/feed/post-item'
import { Post } from '@/app/twitter/components/types'
import ToolBarFeed from '@/app/twitter/components/element-post/tool-bar-feed'

type Props = {
  posts: Post[]
}

function PostList(props: Props) {
  const { posts } = props
  
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="hover:bg-gray-900 pt-4 pb-4  border-b-[1px] border-[#2f3336]"
        >
          <PostItem
            id={post.id}
            content={post.content}
            image={post.image}
            name={post.name}
            time={post.time}
            nameId={post.nameId}
            like={post.like}
            created_at={post.created_at}
          />
          <ToolBarFeed />
        </div>
      ))}
    </div>
  )
}

export default PostList

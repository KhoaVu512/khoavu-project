import ToolBarFeed from '@/app/twitter/components/element-post/tool-bar-feed'
import PostItem from '@/app/twitter/components/feed/post-item'
import { Post } from '@/app/twitter/components/types'
import { useCallback, useEffect, useMemo, memo } from 'react'

type Props = {
  posts: Post[]
}

function PostList(props: Props) {
  const { posts: list } = props

  const _onPress = useCallback(() => {

  }, [])


  return (
    <div>
      {list.map((post) => (
        <div
          key={post.id}
          className="hover:bg-gray-900 pt-4 pb-4  border-b-[1px] border-[#2f3336]"
        >
          <PostItem item={post} />
          <ToolBarFeed />
        </div>
      ))}
    </div>
  )
}

export default memo(PostList)

import Link from 'next/link'
import { getAllEvents } from '../../../../dummy-data'
import PostList from '@/app/twitter/components/feed/post-list'

function Post() {

  const events = getAllEvents()

  return (
    <div>
      <PostList items={events} />
    </div>
  )
}

export default Post

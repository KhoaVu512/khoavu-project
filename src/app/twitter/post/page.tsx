import Trending from '@/app/twitter/components/layout/trending'
import ContainerPost from './container-post'

function PostPage() {
  return (
    <div className="flex w-[990px] relative">
      <ContainerPost />
      <Trending />
    </div>
  )
}

export default PostPage

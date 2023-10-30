import Trending from '@/app/twitter/components/layout/trending'
import ContainerPost from './container-post'
import { getEventWithId } from '../../../../../dummy-data'

function PostPage({ params }: { params: { slug: string } }) {

  const id: string = params.slug
  console.log(id)
  console.log(getEventWithId(id))
  const item = getEventWithId(id)

  return (
    <div className="flex w-[990px] relative">
      <ContainerPost postDetails={item}/>
      <Trending />
     
    </div>
    
  )
}

export default PostPage

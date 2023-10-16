import CommentPost from '@/app/twitter/components/ui/comment-post'
import Like from '@/app/twitter/components/ui/like'
import RePost from '@/app/twitter/components/ui/repost'

function ToolBar() {
  return (
    <div className='ml-[72px] mr-12'>
      <div className='flex justify-between'>
      <CommentPost />
      <RePost />
      <Like />
      <RePost />
      </div>
     
    </div>
  )
}

export default ToolBar
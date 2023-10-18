import CommentPost from '@/app/twitter/components/element-post/comment-post'
import Like from '@/app/twitter/components/element-post/like'
import RePost from '@/app/twitter/components/element-post/repost'

function ToolBar() {
  return (
    <div className="ml-[72px] mr-12">
      <div className="flex justify-between">
        <CommentPost
          width={16}
          height={18}
          textSize={13}
        />
        <RePost
          width={16}
          height={18}
          textSize={13}
        />
        <Like />
        <RePost
          width={16}
          height={18}
          textSize={13}
        />
      </div>
    </div>
  )
}

export default ToolBar

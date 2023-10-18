import CommentPost from '@/app/twitter/components/element-post/comment-post'
import Like from '@/app/twitter/components/element-post/like'
import RePost from '@/app/twitter/components/element-post/repost'

function ToolBar() {
  return (
    <div className="mx-4 border-y-[1px] border-[#2f3336]">
      <div className="flex justify-between pb-2 ">
        <CommentPost
          width={24}
          height={28}
          textSize={18}
        />
        <RePost
          width={24}
          height={28}
          textSize={18}
        />
        <Like />
        <RePost
          width={24}
          height={28}
          textSize={18}
        />
      </div>
    </div>
  )
}

export default ToolBar

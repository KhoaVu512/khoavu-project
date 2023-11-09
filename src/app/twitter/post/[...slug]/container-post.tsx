'use client'
import ProfilePost from '@/app/twitter/components/element-post/profile-post'
import CommentPost from '@/app/twitter/post/[...slug]/comment-post'
import ContentPost from '@/app/twitter/post/[...slug]/content-post'
import ReplyPost from '@/app/twitter/post/[...slug]/reply-post'
import ToolBarPost from '../../components/element-post/tool-bar-post'
import HeaderPost from './header-post'
import { Post } from '@/app/twitter/components/types/post'

interface Props {
  postDetails: Post[]
}

function ContainerPost(props: Props) {
  const { postDetails } = props

  return (
    <div className="w-[598px]  border-[#2f3336] border-[1px] h-full">
      <HeaderPost />
      {postDetails.map((postDetail) => (
        <div key={postDetail.id}>
          <ProfilePost created_at={0} image={postDetail.image} name={postDetail.name} nameId={postDetail.nameId} id={''} time={0} content={''} like={0}/>
          <ContentPost created_at={0} image={postDetail.image} name={postDetail.name} content={postDetail.content} id={''} nameId={''} time={0} like={0} />
        </div>
      ))}

      <div className="my-4">
        <ToolBarPost />
      </div>
      <ReplyPost />
      <CommentPost />
    </div>
  )
}

export default ContainerPost

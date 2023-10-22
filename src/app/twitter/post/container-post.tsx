'use client'
import ProfilePost from '@/app/twitter/components/element-post/profile-post'
import CommentPost from '@/app/twitter/post/comment-post'
import ContentPost from '@/app/twitter/post/content-post'
import ReplyPost from '@/app/twitter/post/reply-post'
import ToolBarPost from '../components/element-post/tool-bar-post'
import HeaderPost from './header-post'

function ContainerPost() {
  return (
    <div className="w-[598px] border-[#2f3336] border-[1px] h-screen">
      <HeaderPost />
      <ProfilePost />
      <ContentPost />
      <div className="my-4">
        <ToolBarPost />
      </div>
      <ReplyPost />
      <CommentPost />
    </div>
  )
}

export default ContainerPost

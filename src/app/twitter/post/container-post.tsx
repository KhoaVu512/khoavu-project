import HeaderPost from './header-post'
import ProfilePost from '@/app/twitter/components/element-post/profile-post'
import ContentPost from '@/app/twitter/post/content-post'

function ContainerPost() {
  return (
    <div className="w-[598px] border-[#2f3336] border-[1px]">
      <HeaderPost />
      <ProfilePost />
      <ContentPost />
    </div>
  )
}

export default ContainerPost

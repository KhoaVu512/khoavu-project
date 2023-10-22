'use client'
import Trending from '@/app/twitter/components/layout/trending'
import ContainerProfile from '@/app/twitter/profile/container-profile'

function Profile() {
  return (
    <div className='flex w-[990px] relative'>
      <ContainerProfile />
      <Trending />
    </div>
  )
}

export default Profile
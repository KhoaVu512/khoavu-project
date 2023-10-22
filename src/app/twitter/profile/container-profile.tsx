'use client'

import PostList from '@/app/twitter/components/feed/post-list'
import HeaderProfile from '@/app/twitter/profile/header-profile'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import { getAllEvents } from '../../../../dummy-data'

function ContainerProfile() {

  const events = getAllEvents()
  return (
    <div className="w-[598px] border-[#2f3336] border-[1px] h-full">
      <HeaderProfile />
      <div>
        <div className="w-full flex">
          <img
            src="https://pbs.twimg.com/profile_banners/1437847286428667906/1646679901/1500x500"
            alt=""
            className="object-fill w-full h-[200px] z-2"
          />
          <div className="w-[146px] h-[146px] ml-4 flex z-1 absolute  mt-[125px] cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1695808403805-ff03eec7de03?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D"
              alt=""
              className="w-full h-full rounded-full "
            />
          </div>
        </div>

        <div className="flex justify-end mr-4"></div>
        <div className="mt-[76px]">
          <div className="text-[20px] mx-4 font-bold">Khoa vu</div>
          <div className="text-[14px] mx-4 mt-1 text-[#71767B]">@Khoavu</div>
          <div className="text-[14px] mx-4 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            ullam mollitia nostrum suscipit repudiandae sequi architecto
            voluptatum eius recusandae obcaecati id quod nam, dolorum officia
            qui fugiat et error neque!
          </div>
          <div className="flex mx-4 mt-2 text-[#71767B]">
            {' '}
            <div className="mx-1">
              <PlaceOutlinedIcon fontSize="small" />
            </div>{' '}
            Barcelona, Spain{' '}
            <div className="ml-2 mr-1">
              <CalendarMonthOutlinedIcon fontSize="small" />
            </div>{' '}
            Joined September 2021
          </div>
          <div className="flex mx-4 mt-2">
            <div>
              233 <span className="text-[#71767B]">Following</span>
            </div>
            <div className='mx-2'>
              1133 <span className="text-[#71767B]">Followers</span>
            </div>
          </div>
        </div>

        <div className="flex justify-around pt-2  border-b-[1px] border-[#2f3336]">
        <div className=" flex justify-center text-[18px] font-semibold text-white border-b-[4px] border-blue-300 pb-2 w-[60px] transform translate rounded-[3px]">
          Posts
        </div>
        <div className="text-[18px] font-semibold text-[#76747B]">Latest</div>
        <div className="text-[18px] font-semibold text-[#76747B]">People</div>
        <div className="text-[18px] font-semibold text-[#76747B]">Media</div>
      </div>
      <div className=" border-b-[1px] border-[#2f3336]">
        <PostList posts={events}/>
      </div>
      </div>
    </div>
  )
}

export default ContainerProfile

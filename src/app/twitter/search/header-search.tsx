import PostList from '@/app/twitter/components/feed/post-list'
import SearchInput from '@/app/twitter/components/ui/search-input'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import { useRouter } from 'next/navigation'
import { getAllEvents } from '../../../../dummy-data'

function HeaderSearch() {
  const router = useRouter()
  const events = getAllEvents()

  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center rounded-full m-2 w-[35px] h-[35px] hover:bg-gray-800 ">
          <button
            onClick={() => router.back()}
            className="p-2"
          >
            <ArrowBackOutlinedIcon fontSize="small" />
          </button>
        </div>
        <div className="flex justify-center w-full  mb-2">
          <SearchInput widthInput={'90%'} />
        </div>
      </div>
      <div className="flex justify-around pt-2  border-b-[1px] border-[#2f3336]">
        <div className=" flex justify-center text-[18px] font-semibold text-white border-b-[4px] border-blue-300 pb-2 w-[60px] transform translate rounded-[3px]">
          Top
        </div>
        <div className="text-[18px] font-semibold text-[#76747B]">Latest</div>
        <div className="text-[18px] font-semibold text-[#76747B]">People</div>
        <div className="text-[18px] font-semibold text-[#76747B]">Media</div>
        <div className="text-[18px] font-semibold text-[#76747B]">Lists</div>
      </div>
      <div className=" border-b-[1px] border-[#2f3336]">
        <PostList posts={events} />
      </div>
    </div>
  )
}

export default HeaderSearch

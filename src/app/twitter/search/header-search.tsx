import SearchInput from '@/app/twitter/components/ui/search-input'
import Pots from '@/app/twitter/feed/post'
import ToolBar from '@/app/twitter/feed/tool-bar-feed'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'

function HeaderSearch() {
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center rounded-full m-2 w-[35px] h-[35px] hover:bg-gray-800 ">
          <ArrowBackOutlinedIcon fontSize="small" />
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
      <div className='mt-4 border-b-[1px] border-[#2f3336]'>
        <Pots />
        <ToolBar />
      </div>
    </div>
  )
}

export default HeaderSearch

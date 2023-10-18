import SearchInput from '@/app/twitter/components/ui/search-input'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'

function HeaderSearch() {
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center rounded-full m-2 w-[35px] h-[35px] hover:bg-gray-800">
          <ArrowBackOutlinedIcon fontSize="small" />
        </div>
        <div className="flex justify-center w-full  mb-2">
          <SearchInput widthInput={'90%'} />
        </div>
      </div>
      <div className="flex justify-around pt-2  border-b-[1px]">
        <div className="text-[20px] font-semibold text-[#76747B] border-b-[4px] border-blue-300 pb-2">Top</div>
        <div className="text-[20px] font-semibold text-[#76747B]">Top</div>
        <div className="text-[20px] font-semibold text-[#76747B]">Top</div>
        <div className="text-[20px] font-semibold text-[#76747B]">Top</div>
        <div className="text-[20px] font-semibold text-[#76747B]">Top</div>
      </div>
    </div>
  )
}

export default HeaderSearch

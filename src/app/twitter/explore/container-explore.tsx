'use client'
import SearchInput from '@/app/twitter/components/ui/search-input'
import TrendsExplore from '@/app/twitter/explore/trends-explore'
import Pots from '@/app/twitter/feed/post'
import ToolBar from '@/app/twitter/feed/tool-bar-feed'
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded'
import { blue } from '@mui/material/colors'

function ContainerExplore() {
  return (
    <div>
      <div className="w-[598px] border-[#2f3336] border-[1px]">
        <div className="flex justify-center w-full  mb-2">
          <SearchInput widthInput={'90%'} />
        </div>
        <div className="border-b-[1px] border-[#2f3336]">
          <TrendsExplore />
        </div>
        <div className="mt-2">
          <div className="mx-4 mb-4 flex">
            <div className="mr-2">
              <ContactSupportRoundedIcon sx={{ color: blue[500] }} />
            </div>
            <div className="text-[20px] font-bold">Pedri</div>
          </div>
          <Pots />
          <ToolBar />
        </div>
      </div>
    </div>
  )
}

export default ContainerExplore

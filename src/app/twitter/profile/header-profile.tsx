import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import { useRouter } from 'next/navigation'

function HeaderProfile() {
  const router = useRouter()

  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center rounded-full m-2 w-[35px] h-[35px] hover:bg-gray-800">
          <button
            onClick={() => router.back()}
            className="p-2"
          >
            <ArrowBackOutlinedIcon fontSize="small" />
          </button>
        </div>
        <div>
          <div className="mt-2 mx-7 h-[35px] w-full flex  items-center text-[20px] font-bold">
            Khoa vu
          </div>
          <div className=" mx-7  w-full flex  items-center text-[13px] ">
            15 posts
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile

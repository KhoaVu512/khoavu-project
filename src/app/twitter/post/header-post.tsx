import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'

function HeaderPost() {
  return (
    <div>
      <div className='flex'>
        <div className="flex justify-center items-center rounded-full m-2 w-[35px] h-[35px] hover:bg-gray-800">
          <ArrowBackOutlinedIcon fontSize='small' />
        </div>
        <div className="my-2 mx-7 h-[35px] w-[35px] flex justify-center items-center text-[20px] font-bold">Post</div>
      </div>
    </div>
  )
}

export default HeaderPost
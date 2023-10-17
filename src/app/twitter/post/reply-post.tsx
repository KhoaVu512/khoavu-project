function ReplyPost() {
  return (
    <div className="flex justify-between  border-b-[1px] border-[#2f3336] mb-2 pb-4">
      <div className="w-full flex mt-4 mb-1">
        <div className="flex rounded-full mx-4  w-[calc(100% - 4px)] h-[calc(100% - 4px)] mr-4">
          <img
            src="/images/avatar-demo1.png"
            alt={'avatar user'}
            className="w-[42px] h-[40px] rounded-full"
          />
        </div>{' '}
        <div className="h-full">
          <input
            type="text"
            className=" bg-transparent pb-4 focus:outline-none text-[18px]"
            placeholder="Reply post"
          />
        </div>
      </div>
      <div className='mr-4  flex items-center '>
        <button className=' bg-blue-600 px-4 py-2 rounded-2xl'>Reply</button>
      </div>
    </div>
  )
}

export default ReplyPost

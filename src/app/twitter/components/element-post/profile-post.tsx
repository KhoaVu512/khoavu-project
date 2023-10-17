function ProfilePost() {
  return (
    <div className="w-full flex mt-4 mb-4">
      <div className="flex rounded-full mx-4  w-[calc(100% - 4px)] h-[calc(100% - 4px)] mr-4">
        <img
          src="/images/avatar-demo1.png"
          alt={'avatar user'}
          className="w-[42px] h-[40px] rounded-full"
        />
      </div>
      <div className="flex flex-col mr-4 w-[90%]">
        <div className="flex flex-col">
          <div className="mr-2 font-semibold">Khoavu</div>
          <div></div>
          <div className="mr-1 text-[#71767B]">@Khoavu</div>
        </div>
      </div>
    </div>
  )
}
export default ProfilePost

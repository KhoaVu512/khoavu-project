import ToolBar from '@/app/twitter/feed/tool-bar-feed'

function CommentPost() {
  return (
    <div className="border-b-[1px] border-[#2f3336] flex flex-col">
      <div className=" w-full flex mt-4  ">
        <div className="flex rounded-full mx-4  w-[calc(100% - 4px)] h-[calc(100% - 4px)] mr-4">
          <img
            src="/images/avatar-demo1.png"
            alt={'avatar user'}
            className="w-[42px] h-[40px] rounded-full"
          />
        </div>{' '}
        <div className="flex flex-col mr-4 w-[90%]">
          <div className="flex">
            <div className="mr-2 font-bold">Khoavu</div>
            <div className="mr-1 text-[#71767B]">
              @Khoavu <span>.</span>
            </div>
            <div className="mr-1 text-[#71767B]">19m</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            numquam tenetur ratione eum voluptas dignissimos ab aliquam modi,
            aliquid voluptates libero, id suscipit quod unde fuga autem
            accusamus magnam eveniet.
          </div>
        </div>
      </div>
        <ToolBar />
    </div>
  )
}

export default CommentPost

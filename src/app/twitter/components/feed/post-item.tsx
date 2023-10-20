import Link from 'next/link'
import { Post } from '@/app/twitter/components/types'

function PostItem(Props: Post) {
  return (
    <div>
      <Link
        href={'/twitter/post'}
        className="hover:bg-gray-900"
      >
        <div className="">
          <div className="w-full flex  mb-1">
            <div className="flex rounded-full mx-4  w-[calc(100% - 4px)] h-[calc(100% - 4px)] mr-4">
              <img
                src={Props.image}
                alt={`avatar + ${Props.name}`}
                className="w-[42px] h-[40px] rounded-full"
              />
            </div>
            <div className="flex flex-col mr-4 w-[90%]">
              <div className="flex">
                <div className="mr-2 font-bold">{Props.name}</div>
                <div className="mr-1 text-[#71767B]">
                  {Props.nameId} <span>.</span>
                </div>
                <div className="mr-1 text-[#71767B]"> {Props.time}h</div>
              </div>
              <div>{Props.content}</div>
              <img
                src={Props.image}
                alt={'avatar user'}
                className="w-[95%] mt-6 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default PostItem

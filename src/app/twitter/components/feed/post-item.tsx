import { Post } from '@/app/twitter/components/types'
import Link from 'next/link'
import { useCallback, useMemo } from 'react'

type Props = {
  item: Post
}

function PostItem(props: Props) {
  const { item } = props
  
  const p = useMemo(() => item, [item.content])

  return (
    <div>
      <Link
        href={`/twitter/post/${p.id}`}
        className="hover:bg-gray-900"
      >
        <div className="">
          <div className="w-full flex  mb-1">
            <div className="flex rounded-full mx-4  w-[calc(100% - 4px)] h-[calc(100% - 4px)] mr-4">
              <img
                src={p.image}
                alt={`avatar + ${p.name}`}
                className="w-[42px] h-[40px] rounded-full"
              />
            </div>
            <div className="flex flex-col mr-4 w-[90%]">
              <div className="flex">
                <div className="mr-2 font-bold">{p.name}</div>
                <div className="mr-1 text-[#71767B]">
                  {p.nameId} <span>.</span>
                </div>
                <div className="mr-1 text-[#71767B]"> {p.time}h</div>
              </div>
              <div>{p.content}</div>
              <img
                src={p.image}
                alt={'avatar user'}
                className="w-[95%] max-h-[502px]   mt-6 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default PostItem

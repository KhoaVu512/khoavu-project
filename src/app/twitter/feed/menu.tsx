import NewPost from '@/app/twitter/feed/new-post'
import Link from 'next/link'

function MenuFeed() {
  return (
    <div className="w-full">
      {/* <Link href={'/'}>
        <div className="mx-4 w-full h-[53px] text-[20px] flex font-bold items-center">
          Home
        </div>
      </Link> */}

      <div className="flex justify-center items-center h-[53px] w-full border-b-[1px] border-[#2f3336]">
        <div className="w-[50%] flex justify-center font-bold ">For you</div>
        <div className="w-[50%] justify-center flex font-bold">Follow</div>
      </div>


    </div>
  )
}

export default MenuFeed

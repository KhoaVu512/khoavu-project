import Link from 'next/link'

function MenuFeed() {
  return (
    <div className="w-full">
      <Link href={'/'}>
        <div className="mx-4 w-full h-[53px] text-[20px] flex font-bold items-center">
          Home
        </div>
      </Link>

      <div className="flex justify-center items-center h-[53px] w-full border-b-[1px]">
        <div className="w-[50%] flex justify-center">For you</div>
        <div className="w-[50%] justify-center flex ">Follow</div>
      </div>
    </div>
  )
}

export default MenuFeed

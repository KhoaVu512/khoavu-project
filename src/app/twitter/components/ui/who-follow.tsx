'use client'
import ItemWhoFollow from '@/app/twitter/components/ui/item-who-follow'
import ButtonFollow from '@/app/twitter/components/ui/button-follow'
import Link from 'next/link'

function WhoFollow() {
  return (
    <Link href={'/twitter/profile'}>
      <div className="w-full bg-[#202327]  my-6 rounded-2xl hover:bg-light-600 h-[300px] flex flex-col ">
        <div className="mx-6  my-2 text-[20px] font-extrabold ">
          Who to follow
        </div>
        <div className="flex justify-between mx-6 ">
          <div className=" w-full h-[65.5px] hover:cursor-pointer ">
            <ItemWhoFollow
              name="KhoaVu"
              nameTagUser="@khoavu_"
            />{' '}
          </div>
          <div>
            <ButtonFollow />
          </div>
        </div>{' '}
        <div className="flex justify-between mx-6">
          <div className=" w-full h-[65.5px] hover:cursor-pointer">
            <ItemWhoFollow
              name="KhoaVu"
              nameTagUser="@khoavu_"
            />{' '}
          </div>
          <div>
            <ButtonFollow />
          </div>
        </div>{' '}
        <div className="flex justify-between mx-6">
          <div className=" w-full h-[65.5px] hover:cursor-pointer">
            <ItemWhoFollow
              name="KhoaVu"
              nameTagUser="@khoavu_"
            />{' '}
          </div>
          <div>
            <ButtonFollow />
          </div>
        </div>
        <div className="flex h-[52px] w-full items-center hover:cursor-pointer">
          <div className="ml-6 text-blue-400">Show more</div>
        </div>
      </div>
    </Link>
  )
}

export default WhoFollow

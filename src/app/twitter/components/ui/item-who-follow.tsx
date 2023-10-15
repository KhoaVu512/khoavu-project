'use client'
import Image, { StaticImageData } from 'next/image'
interface Props {
  name: string
  nameTagUser: string,
}

function ItemWhoFollow(Props: Props) {
  return (
    <div className="w-full">
      <div className="flex">
        <div   className='flex justify-center items-center rounded-full w-[calc(100% - 4px)] h-[calc(100% - 4px)] mr-4'>
          <img
            src="/images/avatar-demo3.png"
            alt={'avatar user' + Props.nameTagUser}     
            className='w-[40px] h-[40px] rounded-full'
          />
        </div>
        <div className='flex flex-col' >
          <div className='text-15px font-bold'>{Props.name}</div>
          <div className='text-[15px] text-[#71767B] font-light'>{Props.nameTagUser}</div>
        </div>
      </div>
    
    </div>
  )
}

export default ItemWhoFollow

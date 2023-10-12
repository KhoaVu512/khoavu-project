import SettingIcon from '@/assets/setting-icon.svg'

interface Props {
  tab: string,
  trending: string,
  quantity: string
}

function TrendingItem(Props: Props) {
  return (
    <div className="hover:bg-gray-800">
      <div className="h-[82px] mx-6 my-2 flex justify-between ">
        <div className="flex flex-col">
          <div className="text-[13px] text-[#71767B]">{Props.tab}</div>
          <div className="text-[15px] font-bold">{Props.trending}</div>
          <div className="text-[13px] text-[#71767B] font-bold">{Props.quantity} pots</div>
        </div>
        <div className="hover:bg-blue-300 h-6 w-6 rounded-full flex justify-center items-center "><SettingIcon /></div>
      </div>
    </div>
  )
}

export default TrendingItem
import TrendingItem from '@/app/twitter/components/ui/trending-item'

function Trending() {
  return (
    <div className="w-full bg-[#202327]  my-6 rounded-2xl hover:bg-light-600 hover:cursor-pointer">
      <div className="mx-6 my-2 text-[20px] font-extrabold">Trends for you</div>
      <TrendingItem
        tab="Trending in VietNam"
        trending="Ngon"
        quantity="1.29M"
      />
      <TrendingItem
        tab="Trending in world"
        trending="Hams"
        quantity="29k"
      />{' '}
      <TrendingItem
        tab="Trending in world"
        trending="Hams"
        quantity="29k"
      />{' '}
      <TrendingItem
        tab="Trending in world"
        trending="Hams"
        quantity="29k"
      />{' '}
      <TrendingItem
        tab="Trending in world"
        trending="Hams"
        quantity="29k"
      />{' '}
      <TrendingItem
        tab="Trending in world"
        trending="Hams"
        quantity="29k"
      />{' '}
      <TrendingItem
        tab="Trending in world"
        trending="Hams"
        quantity="29k"
      />
      <TrendingItem
        tab="Trending in VietNam"
        trending="Ngon"
        quantity="1.29M"
      />
      <TrendingItem
        tab="Trending in VietNam"
        trending="Ngon"
        quantity="1.29M"
      />
      <div className="flex h-[52px] w-full items-center">
        <div className="ml-6 text-blue-400">Show more</div>
      </div>
    </div>
  )
}

export default Trending

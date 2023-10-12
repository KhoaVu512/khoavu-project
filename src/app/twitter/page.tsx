import MainHome from '@/app/twitter/components/layout/main-home'
import MainTrending from '@/app/twitter/components/layout/main-trending'

function Twitter() {
  return (
    <main className='flex w-[990px]'>
      <MainHome></MainHome>
      <MainTrending></MainTrending>
    </main>
  )
}

export default Twitter
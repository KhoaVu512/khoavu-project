import WhoFollow from '@/app/twitter/components/ui/who-follow'
import ContainerExplore from '@/app/twitter/explore/container-explore'

function PageExplore() {
  return (
    <div className="flex w-[990px] relative">
      <ContainerExplore />
      <div className="relative">
        <div className="flex w-[350px] ml-[20px] flex-col fixed">
          <WhoFollow />
        </div>
      </div>
    </div>
  )
}

export default PageExplore

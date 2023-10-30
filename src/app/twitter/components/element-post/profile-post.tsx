import { Post } from '@/app/twitter/components/types'


function ProfilePost(props: Post) {
  return (
    <div className="w-full flex mt-4 mb-4">
      <div className="flex rounded-full mx-4  w-[calc(100% - 4px)] h-[calc(100% - 4px)] mr-4">
        <img
          src={props.image}
          alt={`avatar of ${props.name}`}
          className="w-[42px] h-[40px] rounded-full"
        />
      </div>
      <div className="flex flex-col mr-4 w-[90%]">
        <div className="flex flex-col">
          <div className="mr-2 font-semibold">{props.name}</div>
          <div></div>
          <div className="mr-1 text-[#71767B]">{props.nameId}</div>
        </div>
      </div>
    </div>
  )
}
export default ProfilePost

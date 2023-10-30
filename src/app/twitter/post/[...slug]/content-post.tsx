import { Post } from '@/app/twitter/components/types'

function ContentPost(props: Post) {
  let timeStamp = Date.now()
  let date = new Date(timeStamp)
  let dateFormat =
    date.getHours() + ':' + date.getMinutes() + ' ,  ' + date.toDateString()

  return (
    <div className="w-full flex mt-4 mb-4 mx-4 flex-col">
      <div>
       {props.content}
      </div>

      <img
        src={props.image}
        alt={`avatar of + ${props.name}`}
        className="w-[95%] mt-6 rounded-2xl"
      />
      <div className="flex mt-2">
        <div className="text-[#74767B] ">{dateFormat}</div>
        <div>
          {' '}
          <span> &ensp; . </span> 3232{' '}
          <span className="text-[#74767B]">&ensp;views</span>
        </div>
      </div>
    </div>
  )
}

export default ContentPost

function ContentPost() {
  let timeStamp = Date.now()
  let date = new Date(timeStamp)
  let dateFormat =
    date.getHours() + ':' + date.getMinutes() + ' ,  ' + date.toDateString()

  return (
    <div className="w-full flex mt-4 mb-4 mx-4 flex-col">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptatibus facilis, sapiente similique incidunt officia voluptatem
        provident porro ullam quidem velit dolorum rem impedit officiis quasi
        quisquam dignissimos quam nobis?
      </div>

      <img
        src="/images/avatar-demo1.png"
        alt={'avatar user'}
        className="w-[95%] mt-6 rounded-2xl"
      />
      <div className='flex mt-2'>
        <div className="text-[#74767B] ">{dateFormat}</div>
        <div> <span> &ensp; . </span> 3232 <span className='text-[#74767B]'>&ensp;views</span></div>
      </div>
    </div>
  )
}

export default ContentPost

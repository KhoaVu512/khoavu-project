import MenuPost from '@/app/twitter/components/element-post/menu-post'
import { FormEvent, useRef, useState } from 'react'

interface Props {

}

function NewPost(props: Props) {
  const [content, setContent] = useState({
    name: '',
  })
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (content.name === '') return alert('last name or first name is empty')

    await fetch('/api/task/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    }).then((res) => res.json())
  }

  return (
    <div className="w-full">
      <form onSubmit={onSubmit}>
        <div className="flex mt-3 mb-4 w-full">
          <div className="flex rounded-full mx-4  w-[calc(100% - 4px)] h-[calc(100% - 4px)] mr-4">
            <img
              src="/images/avatar-demo1.png"
              alt={'avatar user'}
              className="w-[47px] h-[40px] rounded-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="">
              <input
                type="text"
                className="border-none bg-transparent outline-none w-[90%] text-[20px]"
                placeholder="What is happening?!"
                onChange={(event) => {
                  setContent({ ...content, name: (event.target as HTMLInputElement).value })
                }}
              />
            </div>
            <div className="flex justify-between w-full mt-4">
              <div className="w-[40%] ">
                <MenuPost />
              </div>
              <button
                type="submit"
                className=" px-4 py-1 rounded-2xl bg-blue-600 mr-4"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default NewPost

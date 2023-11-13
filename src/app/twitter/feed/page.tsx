'use client'
import PostList from '@/app/twitter/components/feed/post-list'
import { Post } from '@/app/twitter/components/types'
import MenuFeed from '@/app/twitter/feed/menu'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { getAllEvents } from '../../../../dummy-data'
import NewPost from './new-post'

function FeedPage() {
  const events = getAllEvents()
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setLoading] = useState(true)
  console.log('RENDERING')
  useEffect(() => {
    fetch('/api/task/list')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setPosts(json.data)
        setLoading(false)
      })
    console.log('MOUNTED')
  }, [])

  const count = 3

  const a = [
    {
      name: 'khoa',
    },
    {
      name: 'khoa',
    },
    {
      name: 'khoa',
    },
    {
      name: 'khoa',
    },
    {
      name: 'khoa',
    },
  ]
  let b = []

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      b.push({ ...a[i], count })
    } else {
      b.push({ ...a[i] })
    }
  }

  console.log(b)
  return (
    <div className="w-[598px] h-full  flex border-[#2f3336] border-[1px]">
      <div className="relative ">
        <div className="fixed w-[598px] bg-black/95 top-0 border-[1px] border-[#2f3336]">
          <MenuFeed></MenuFeed>
        </div>
      </div>
      <div className="w-full border-[#2f3336] mt-12">
        <div className="flex border-b-[1px] border-[#2f3336] w-full mt-2">
          <NewPost />
        </div>
        <div>
          <PostList posts={posts}></PostList>
        </div>
      </div>
    </div>
  )
}

export default FeedPage

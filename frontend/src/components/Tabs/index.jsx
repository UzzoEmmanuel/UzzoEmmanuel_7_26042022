import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import moment from 'moment'
import PostCard from '../PostCard'
import Underline from '../Underline'
import Post from '../Forms/Post'
import { GetPosts } from '../../utils/services/PostAction'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Switch() {
  let [categories] = useState({
    Tout: [],
    Post: [],
    Media: [],
  })

  const [posts, setPosts] = useState([])

  useEffect(() => {
    GetPosts().then((response) => setPosts(response.data))
  }, [])

  return (
    <div className="flex flex-col justify-around h-auto w-full mt-20 mb-20">
      <h1 className="w-auto mx-10 text-3xl text-primary font-bold tracking-widest">
        TABLEAU DE BORD
      </h1>
      <Underline />
      <Post />
      <Underline />
      <Tab.Group>
        <Tab.List className="justify-center flex flex-row mx-10 my-10 rounded-md">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'max-w-xs w-full rounded-md py-2.5 text-lg font-medium leading-5 text-primary bg-transparent_background',
                  'focus:outline-none focus:ring-0',
                  selected
                    ? 'bg-white'
                    : 'text-primary hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mx-10">
          {Object.values(categories).map(() => (
            <Tab.Panel
              key=""
              className={classNames(
                'rounded-xl bg-transparent_background p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400'
              )}
            >
              {posts
                .slice(0)
                .reverse()
                .map((post) => (
                  <PostCard
                    key={post.id}
                    username={post.authorId}
                    title={post.title}
                    content={post.content}
                    createdAt={moment(post.createdAt)
                      .utc()
                      .format('DD-MM-YYYY')}
                  />
                ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

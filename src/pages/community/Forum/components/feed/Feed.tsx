// posts.tsx
import { Link } from 'react-router-dom'
import React from 'react'
import Post from '../common/Post'
import { Question } from '../../Api/types'

const Feed: React.FC<{ posts: Question[] }> = ({ posts }) => (
  <div className="space-y-2.5">
    {posts.map(post => (
      <div>
      <Link key={post.question_id} to={`/community/forum/post/${post.question_id}`}>
        <Post {...post} />
      </Link>
      </div>
    ))}
  </div>
)

export default Feed 

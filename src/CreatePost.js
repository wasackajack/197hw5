/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import s from 'styled-components'
import React from 'react'
import PostForm from './PostForm'

import './App.css'

const H2 = s.h2`
    margin-left: 150px
`

const CreatePost = () => (
  <div className="create">
    <H2>Create Post</H2>
    <PostForm initialState depth={1} />
  </div>
)
export default CreatePost

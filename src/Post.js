/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import s from 'styled-components'
import React, { useState } from 'react'
import Voter from './Voter'
import PostForm from './PostForm'

const Div = s.div`
  margin: 0px 25px;
`

const Post = ({ name, description, depth }) => (
  <Div>
    <h4>
      {name}
      <Voter />
    </h4>
    <h2>{description}</h2>
    <PostForm initialState={false} depth={depth} prevUser={name} />
  </Div>
)
export default Post

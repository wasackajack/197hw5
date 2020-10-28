/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import s from 'styled-components'
import React, { useState } from 'react'
import Post from './Post'
import './App.css'

const Button = s.button`
  background-color: cyan;
  color: black;
  font-size: 16px;
  padding: 3px 3px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`

const Button1 = s.button`
  background-color: cyan;
  color: black;
  font-size: 13px;
  padding: 1px 1px;
  border-radius: 2px;
  margin: -20px 0px;
  cursor: pointer;
`

const PostForm = ({ initialState, depth, prevUser }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [replying, setReplying] = useState(initialState) // true for createPost, false for Post

  // make an array of posts so we can have multiple responses to a single post
  const [postArray, setPostArray] = useState([])

  const replyClick = e => {
    // make sure that things are filled in before submitting
    e.preventDefault()
    if (name !== '' && description !== '') {
      setName(name)
      setDescription(description)
      setReplying(!replying)
      // pushing the appropiate post onto the postarray
      setPostArray([...postArray, { Name: name, Description: description }])
      // set the names back to normal
      setName('')
      setDescription(('@').concat(prevUser).concat(' '))
    }
  }
  // for creating
  const createClick = e => {
    // make sure that things are filled in before submitting
    e.preventDefault()
    if (name !== '' && description !== '') {
      setName(name)
      setDescription(description)
      // pushing the appropiate post onto the postarray
      setPostArray([...postArray, { Name: name, Description: description }])
      // set the names back to normal
      setName('')
      setDescription('')
    }
  }

  const reply = e => {
    setDescription(('@').concat(prevUser).concat(' '))
    setReplying(!replying)
  }

  return (
    <div>
      {!initialState && depth < 4 && (
        <Button1 onClick={reply}>Reply</Button1>
      )}

      {replying && depth < 4 && (
        <form onSubmit={initialState ? createClick : replyClick}>
          <label htmlFor="Name">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="name"
            />
          </label>

          <label htmlFor="Description">
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="post"
            />
          </label>
          <Button type="submit">Submit</Button>
        </form>
      )}

      {postArray.map(({ Name, Description }) => (
        <Post
          key={Name + Description}
          name={Name}
          description={Description}
          depth={depth + 1}
        />
      ))}
    </div>
  )
}
export default PostForm

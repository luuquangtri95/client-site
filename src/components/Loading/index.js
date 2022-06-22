import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

function Loading(props) {
  return (
    <Spinner animation='border' role='status' size='lg'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  )
}

export default Loading

import React from 'react'
import BookAMeeting from '../../components/BookAMeeting'
import Header from '../../components/Pages/Header'
import Video from '../../components/Pages/Video'

const About = () => {
  return (
    <>
      <Header 
        title="We have created a big library of illustrations with custom style and action types."
        description="E-commerce Illustration Pack collects different ways to do quick shopping, pay in a second, and get all those stuff you need. There are smart delivery and polite service in the scenes. Each of them is realized in cold and warm colors with"
      />
      <Video />
      <BookAMeeting />
    </>
  )
}

export default About
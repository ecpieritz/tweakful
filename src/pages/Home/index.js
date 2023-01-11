import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import VideoSection from '../../components/VideoSection'
import Topics from '../../components/TopicsSection'
import Goals from '../../components/Goals'
import BookAMeeting from '../../components/BookAMeeting'

const Home = () => {
  return (
    <>
     <HomeHeader />
     <VideoSection />
     <Topics />
     <Goals />
     <BookAMeeting />
    </>
  )
}

export default Home

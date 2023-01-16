import React from 'react'
import HomeHeader from '../../components/Home/HomeHeader'
import VideoSection from '../../components/Home/VideoSection'
import Topics from '../../components/Home/TopicsSection'
import Goals from '../../components/Home/Goals'
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

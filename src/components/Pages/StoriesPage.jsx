import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import StoriesContainer from '../Stories/StoriesContainer'
import StoriesHeader from '../Stories/StoriesHeader'
import data from '../../constants/data'

const StoriesPage = () => {
  return (
    <>
      <NavBar />
        <StoriesHeader />
        <StoriesContainer isDateShown={true} stories={data.STORIES_DATA} />
      <Footer />
    </>
  )
}

export default StoriesPage
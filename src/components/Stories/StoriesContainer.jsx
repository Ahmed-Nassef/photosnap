import React from 'react'

import Story from '../UI/Story'
const StoriesContainer = ({stories,style,isDateShown}) => {
  return (
    <section className='stories-container'>
      <div className='stories-container__wrapper'>
        <div className={`stories-container__content ${style} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
      {stories.map((story)=>(
        <Story key={story.title} title={story.title} date={story.date} dateShown={isDateShown} image={story.image} author={story.author} />
      ))}
        </div>
      </div>
    </section>
  )
}

export default StoriesContainer
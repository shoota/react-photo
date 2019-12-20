import React from 'react'

import { StoryLayout } from '../../templates/Layout/index.stories'

import { Day } from '.'

export default { title: 'pages/Day' }

export const withDefault = () => (
  <StoryLayout>
    <Day
      title="写真を表示します"
      date="YYYY-MM-DD"
      src="./assets/works/inorganicStructure/01.jpg"
    />
  </StoryLayout>
)

export const withPortrait = () => (
  <StoryLayout>
    <Day
      title="写真を表示します"
      date="YYYY-MM-DD"
      src="./assets/works/photonicMusica/08.jpg"
    />
  </StoryLayout>
)

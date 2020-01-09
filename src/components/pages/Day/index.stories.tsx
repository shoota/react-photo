import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'

import { StoryLayout } from '../../templates/Layout/index.stories'

import { Day } from '.'

export default { title: 'pages/Day' }

export const withDefault = () => (
  <StoryLayout>
    <Day
      title="写真を表示します"
      date="YYYY-MM-DD"
      src="./assets/works/05_inorganicStructure/01.jpg"
      hasPrev={boolean('hasPrev', true)}
      hasNext={boolean('hasNext', true)}
      onNextClick={action('onNextClick')}
      onPrevClick={action('onPrevClick')}
    />
  </StoryLayout>
)

export const withPortrait = () => (
  <StoryLayout>
    <Day
      title="写真を表示します"
      date="YYYY-MM-DD"
      src="./assets/works/02_photonicMusica/08.jpg"
      hasPrev={boolean('hasPrev', true)}
      hasNext={boolean('hasNext', true)}
      onNextClick={action('onNextClick')}
      onPrevClick={action('onPrevClick')}
    />
  </StoryLayout>
)

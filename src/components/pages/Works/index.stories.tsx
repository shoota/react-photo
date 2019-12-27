import React from 'react'
import { lorem } from 'faker'

import { StoryLayout } from '../../templates/Layout/index.stories'

import { Works } from '.'

export default { title: 'pages/Works' }

const datasource: any[] = []
for (let i = 0; i < 23; i += 1) {
  datasource.push({
    title: lorem.word(),
    thumbnail:
      'https://gist.github.com/shoota/9319742/raw/3d1a799e759fb548262cdf5484cc1a914e56e7bd/avt.jpg',
    content: lorem.sentences(),
  })
}

export const withDefault = () => (
  <StoryLayout>
    <Works datasource={datasource} />
  </StoryLayout>
)

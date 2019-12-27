import React from 'react'
import { lorem } from 'faker'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { StoryLayout } from '../../templates/Layout/index.stories'

import { Works } from '.'

import { anchorHandler } from 'containers/utils/anchorClickHandler'

export default { title: 'pages/Works' }

const datasource: any[] = []
for (let i = 0; i < 23; i += 1) {
  datasource.push({
    title: lorem.word(),
    content: lorem.sentences(),
    files: ['./assets/works/inorganicStructure/01.jpg'],
    // files: ['./assets/works/photonicMusica/08.jpg'],
  })
}

export const withDefault = () => (
  <StoryLayout>
    <Works
      currentImageKey={0}
      datasource={datasource}
      visibleWork={datasource[0]}
      onImageClick={anchorHandler(() => action('onImageClick')())}
      onListClick={anchorHandler(() => action('onListClick')())}
      visible={boolean('visible', false)}
    />
  </StoryLayout>
)

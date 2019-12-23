import React from 'react'
import { action } from '@storybook/addon-actions'

import { Layout } from '.'

export default { title: 'template/Layout' }

export const StoryLayout: React.FC<{}> = ({ children }) => (
  <Layout
    title="日々是好日"
    onTitleClick={event => {
      event.preventDefault()
      action('onTitleClick')(event)
    }}
    onMenuClick={clickParam => action('onMenuClick')(clickParam)}
    onTwitterClick={action('onTwitterClick')}
  >
    {children}
  </Layout>
)

export const withDefault = () => <StoryLayout>ここが描画部分です</StoryLayout>

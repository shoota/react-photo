import React from 'react'
import { actions } from '@storybook/addon-actions'

import { Layout } from '.'

export default { title: 'template/Layout' }

export const StoryLayout: React.FC<{}> = ({ children }) => (
  <Layout
    title="日々是好日"
    onTitleClick={() => actions('onTitleClick')}
    onMenuClick={_clickParam => actions('onMenuClick')}
  >
    {children}
  </Layout>
)

export const withDefault = () => <StoryLayout>ここが描画部分です</StoryLayout>

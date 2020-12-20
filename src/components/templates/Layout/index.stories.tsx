import React from 'react'
import { action } from '@storybook/addon-actions'
import { Card } from 'antd'

import { Layout } from '.'

export default { title: 'template/Layout' }

export const StoryLayout: React.FC<{}> = ({ children }) => (
  <Layout
    title="日々是好日"
    tabKey="/days"
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

export const withDefault = () => (
  <StoryLayout>
    <Card>ここが描画部分です</Card>
    <Card style={{ width: '120px' }}>ここが描画部分です</Card>
    <Card style={{ width: '240px' }}>ここが描画部分です</Card>
    <Card style={{ width: '480px' }}>ここが描画部分です</Card>
    <Card style={{ width: '50%' }}>ここが描画部分です</Card>
    <Card style={{ width: '100%' }}>ここが描画部分です</Card>
  </StoryLayout>
)

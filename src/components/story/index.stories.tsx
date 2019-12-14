import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { Button } from 'antd'
import * as React from 'react'

import { MarginCard, Wrapper } from '../common'

storiesOf('story/usage', module).add('default', () => {
  return (
    <Wrapper>
      <MarginCard title="First">
        <Button>{text('first', '1st')}</Button>
      </MarginCard>
      <MarginCard title="Second">
        <Button>{text('second', '2nd')}</Button>
      </MarginCard>
    </Wrapper>
  )
})

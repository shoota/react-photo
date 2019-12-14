import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { BasicButton } from '.'

storiesOf('button/BasicButton', module).add('default', () => {
  return <BasicButton innerText={text('button title', 'Example')} />
})

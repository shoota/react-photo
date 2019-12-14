import { Button } from 'antd'
import * as React from 'react'

export type Props = {
  innerText: string
}

export const BasicButton = ({ innerText }: Props) => {
  return <Button>{innerText}</Button>
}

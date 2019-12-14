import { Card } from 'antd'
import styled from 'styled-components'

export const MarginCard = styled(Card)`
  & + & {
    margin-top: 20px;
  }
`

export const Wrapper = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`

import React from 'react'
import { Layout, Button } from 'antd'
import styled from 'styled-components'

const { Footer: AntFooter } = Layout

const StyledFooter = styled(AntFooter)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
type Props = {
  onTwitterClick?: () => void
}

export const Footer: React.FC<Props> = ({ onTwitterClick }) => (
  <StyledFooter>
    {onTwitterClick && (
      <Button ghost type="primary" icon="twitter" onClick={onTwitterClick} />
    )}
  </StyledFooter>
)

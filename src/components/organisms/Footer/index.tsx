import React from 'react'
import { Layout, Button } from 'antd'
import styled from 'styled-components'
import { TwitterOutlined } from '@ant-design/icons'

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
      <Button
        ghost
        type="primary"
        icon={<TwitterOutlined />}
        onClick={onTwitterClick}
      />
    )}
  </StyledFooter>
)

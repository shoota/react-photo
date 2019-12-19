import React, { ComponentProps } from 'react'
import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'

// import { Header } from '../../organisms/Header'

import { Header } from 'components/organisms/Header'

const { Content } = AntLayout

const StyledContent = styled(Content)`
  padding: 24px;
`

type Props = ComponentProps<typeof Header>

export const Layout: React.FC<Props> = ({
  children,
  title,
  onTitleClick,
  onMenuClick,
}) => {
  return (
    <AntLayout>
      <Header
        title={title}
        onTitleClick={onTitleClick}
        onMenuClick={onMenuClick}
      />
      <StyledContent>{children}</StyledContent>
    </AntLayout>
  )
}

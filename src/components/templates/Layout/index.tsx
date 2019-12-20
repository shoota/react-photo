import React, { ComponentProps } from 'react'
import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'

import { Header } from 'components/organisms/Header'
import { Footer } from 'components/organisms/Footer'

const { Content } = AntLayout

const FlexContainer = styled(Content)`
  display: flex;
  justify-content: center;
  padding-top: 48px;
`

type Props = ComponentProps<typeof Header> & ComponentProps<typeof Footer>

export const Layout: React.FC<Props> = ({
  children,
  title,
  onTitleClick,
  onMenuClick,
  onTwitterClick,
}) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header
        title={title}
        onTitleClick={onTitleClick}
        onMenuClick={onMenuClick}
      />
      <FlexContainer>{children}</FlexContainer>
      <Footer onTwitterClick={onTwitterClick} />
    </AntLayout>
  )
}

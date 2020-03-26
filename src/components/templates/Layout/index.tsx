import React, { ComponentProps } from 'react'
import { Layout as AntLayout, Card } from 'antd'
import styled from 'styled-components'

import { Header } from 'components/organisms/Header'
import { Footer } from 'components/organisms/Footer'

const { Content } = AntLayout

const ContentContainer = styled(Content)`
  width: 80%;
  margin: auto;
  padding-top: 48px;
  * {
    margin: auto;
  }
`

const TransparentCard = styled(Card)`
  background-color: inherit;
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
      <ContentContainer>
        <TransparentCard>{children}</TransparentCard>
      </ContentContainer>
      <Footer onTwitterClick={onTwitterClick} />
    </AntLayout>
  )
}

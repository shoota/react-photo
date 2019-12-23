import React, { ComponentProps } from 'react'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'

const { Header: AntHeader } = Layout

const StyledHeader = styled(AntHeader)`
  display: flex;
  padding: 0 24px;
  align-items: center;
`

const HeaderTitle = styled.h1`
  padding: 0;
  margin: 0;
  a {
    color: currentColor;
  }
`

const StyledMenu = styled(Menu)`
  line-height: 64px;
  margin-right: 6vw;
  margin-left: auto;
`

type Props = {
  title: string
  onTitleClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
  onMenuClick: ComponentProps<typeof Menu>['onClick']
}

export const Header: React.FC<Props> = ({
  onTitleClick,
  onMenuClick,
  title,
}) => {
  return (
    <StyledHeader>
      <HeaderTitle>
        <a href="/" onClick={onTitleClick}>
          {title}
        </a>
      </HeaderTitle>
      <StyledMenu
        mode="horizontal"
        defaultSelectedKeys={['days']}
        onClick={onMenuClick}
      >
        <Menu.Item key="days">日々</Menu.Item>
        <Menu.Item key="works">写真</Menu.Item>
        <Menu.Item key="about">私について</Menu.Item>
      </StyledMenu>
    </StyledHeader>
  )
}

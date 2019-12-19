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
`

const StyledMenu = styled(Menu)`
  line-height: 64px;
  margin-right: 6vw;
  margin-left: auto;
`

type Props = {
  title: string
  onTitleClick: () => void
  onMenuClick: ComponentProps<typeof Menu>['onClick']
}

export const Header: React.FC<Props> = ({
  onTitleClick,
  onMenuClick,
  title,
}) => {
  return (
    <StyledHeader>
      <HeaderTitle onClick={onTitleClick}>{title}</HeaderTitle>
      <StyledMenu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        onClick={onMenuClick}
      >
        <Menu.Item key="1">日々</Menu.Item>
        <Menu.Item key="2">写真</Menu.Item>
        <Menu.Item key="3">私について</Menu.Item>
      </StyledMenu>
    </StyledHeader>
  )
}

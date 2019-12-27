import React from 'react'
import { List, Card } from 'antd'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  width: 60vw;
  max-width: 720px;
  margin: auto;
`

type WorkData = {
  title: string
  thumbnail: string
  content: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

type Props = {
  datasource: WorkData[]
}

export const Works: React.FC<Props> = ({ datasource }) => {
  return (
    <StyledCard>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={datasource}
        renderItem={({ title, thumbnail, content }) => (
          <List.Item
            key={title}
            extra={<img width={220} alt="logo" src={thumbnail} />}
          >
            <List.Item.Meta title={title} />
            {content}
          </List.Item>
        )}
      />
    </StyledCard>
  )
}

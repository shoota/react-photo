import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'

type Props = {
  date: string
  src: string
  title?: string
}

const PhotoCard = styled(Card)`
  margin: auto;
  .ant-card-meta-description {
    text-align: right;
  }
`

const Photo = styled.div`
  margin-bottom: 16px;
  text-align: center;
  img {
    border-radius: 3px;
  }
`

const { Meta } = Card

export const Day: React.FC<Props> = ({ date, src, title }) => {
  return (
    <PhotoCard>
      <Photo>
        <img alt={title} src={src} />
      </Photo>
      <Meta title={title} description={date} />
    </PhotoCard>
  )
}

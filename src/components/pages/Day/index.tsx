import React from 'react'
import { Col, Card, Button, Row } from 'antd'
import styled from 'styled-components'

type Props = {
  date: string
  src: string
  title?: string
  hasPrev: boolean
  hasNext: boolean
  onPrevClick?: () => void
  onNextClick?: () => void
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

const ButtonRow = styled(Row)`
  margin-top: 48px;
`

const { Meta } = Card

export const Day: React.FC<Props> = ({
  date,
  src,
  title,
  hasPrev,
  hasNext,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <Row>
      <PhotoCard>
        <Photo>
          <img alt={title} src={src} />
        </Photo>
        <Meta title={title} description={date} />
      </PhotoCard>
      <ButtonRow type="flex" justify="space-around">
        <Col>
          <Button
            key="past"
            type="primary"
            icon="double-left"
            disabled={!hasPrev}
            onClick={onPrevClick}
          />
        </Col>
        <Col>
          <Button
            key="future"
            type="primary"
            icon="double-right"
            disabled={!hasNext}
            onClick={onNextClick}
          />
        </Col>
      </ButtonRow>
    </Row>
  )
}

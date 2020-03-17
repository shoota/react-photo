import React from 'react'
import Img from 'react-image'
import { Col, Card, Button, Row, Spin } from 'antd'
import styled from 'styled-components'

export type DaysPhotoProps = {
  date: string
  src: string
  title?: string
  hasPrev: boolean
  hasNext: boolean
}
type Props = DaysPhotoProps & {
  onPrevClick?: () => void
  onNextClick?: () => void
}

const PhotoCard = styled(Card)`
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

const SpinWrapper = styled.div`
  width: 800px;
  height: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
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
          <Img
            src={src}
            loader={
              <SpinWrapper>
                <Spin size="large" tip="Loading..." />
              </SpinWrapper>
            }
          />
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

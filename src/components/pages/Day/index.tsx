import React from 'react'
import Img from 'react-image'
import { Card, Button, Spin } from 'antd'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
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
  width: 800px;
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

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  && {
    margin: 32px 48px 0;
  }
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
    <>
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
      <ButtonWrap>
        <Button
          key="past"
          type="primary"
          icon={<DoubleLeftOutlined />}
          disabled={!hasPrev}
          onClick={onPrevClick}
        />
        <Button
          key="future"
          type="primary"
          icon={<DoubleRightOutlined />}
          disabled={!hasNext}
          onClick={onNextClick}
        />
      </ButtonWrap>
    </>
  )
}

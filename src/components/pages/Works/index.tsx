import React, { ComponentProps } from 'react'
import { List, Card, Modal, Spin } from 'antd'
import styled from 'styled-components'
import Img from 'react-image'

const StyledCard = styled(Card)`
  width: 60vw;
  max-width: 720px;
`

export type WorkData = {
  key: string
  title: string
  content: string
  files: string[]
}

type Props = {
  currentImageKey: number
  // FIXME should not load all work data. it should fetch dinamitically
  datasource: WorkData[]
  onCancel: ComponentProps<typeof Modal>['onCancel']
  onListClick: (key: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void
  onImageClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  visibleWork: WorkData
  visible: boolean
}

const Photo = styled.div`
  text-align: center;
  margin-bottom: 24px;
  img {
    border: solid 1px #202020;
    border-radius: 3px;
    max-width: 720px;
    cursor: pointer;
  }
`

const SpinWrapper = styled.div`
  width: 720px;
  height: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ExtraImg = styled.img`
  border: solid 1px #202020;
`

export const Works: React.FC<Props> = ({
  currentImageKey,
  datasource,
  onCancel,
  onImageClick,
  onListClick,
  visibleWork,
  visible,
}) => {
  return (
    <StyledCard>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={datasource}
        renderItem={({ key, title, files, content }) => (
          <List.Item
            key={key}
            extra={
              <a href="/" onClick={onListClick(key)}>
                <ExtraImg width={180} alt="logo" src={files[0]} />
              </a>
            }
          >
            <List.Item.Meta
              title={
                <a href="/" onClick={onListClick(key)}>
                  {title}
                </a>
              }
            />
            {content}
          </List.Item>
        )}
      />
      <Modal
        width={800}
        title={visibleWork.title}
        visible={visible}
        onCancel={onCancel}
        footer={null}
      >
        <Photo>
          <a href="/" onClick={onImageClick}>
            <Img
              alt={visibleWork.title}
              src={visibleWork.files[currentImageKey]}
              loader={
                <SpinWrapper>
                  <Spin size="large" tip="Loading..." />
                </SpinWrapper>
              }
            />
          </a>
        </Photo>
      </Modal>
    </StyledCard>
  )
}

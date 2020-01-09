import React from 'react'
import { List, Card, Modal } from 'antd'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  width: 60vw;
  max-width: 720px;
  margin: auto;
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
  onListClick: (key: string) => (e: React.MouseEvent<HTMLAnchorElement>) => void
  onImageClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  visibleWork: WorkData
  visible: boolean
}

const Photo = styled.div`
  text-align: center;
  margin-bottom: 24px;
  img {
    border: solid 2px #202020;
    border-radius: 3px;
    cursor: pointer;
  }
`

export const Works: React.FC<Props> = ({
  currentImageKey,
  datasource,
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
                <img width={220} alt="logo" src={files[0]} />
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
        width={720}
        title={visibleWork.title}
        visible={visible}
        footer={null}
      >
        <Photo>
          <a href="/" onClick={onImageClick}>
            <img
              alt={visibleWork.title}
              src={visibleWork.files[currentImageKey]}
            />
          </a>
        </Photo>
      </Modal>
    </StyledCard>
  )
}

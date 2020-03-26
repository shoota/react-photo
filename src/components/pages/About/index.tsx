import React from 'react'
import { Avatar, Card, Typography, Divider, Row, Col, List } from 'antd'
import styled from 'styled-components'

const { Title, Paragraph } = Typography

const AboutCard = styled(Card)`
  width: 60vw;
  max-width: 720px;
  font-family: 'M PLUS Rounded 1c', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
`

const Name = styled(Title)`
  text-align: center;
`

const ProfileTypography = styled(Typography)`
  margin-top: 10px;
`

type ProfileDetail = {
  title: string
  description: string
  link?: string
}

type Props = {
  avatarUrl?: string
  name: string
  profileDescriptions: string[]
  profileDetails: ProfileDetail[]
}

export const About: React.FC<Props> = ({
  avatarUrl,
  name,
  profileDescriptions,
  profileDetails,
}) => {
  return (
    <AboutCard>
      <Row justify="space-around" align="bottom">
        <Col style={{ textAlign: 'center' }}>
          <Avatar size={128} src={avatarUrl} />
          <Name>{name}</Name>
        </Col>
        <Col span={16}>
          <ProfileTypography>
            {profileDescriptions.map(desc => (
              <Paragraph key="">{desc}</Paragraph>
            ))}
          </ProfileTypography>
        </Col>
      </Row>
      <Divider />
      <List
        itemLayout="horizontal"
        dataSource={profileDetails}
        renderItem={({ title, description, link }) => (
          <List.Item>
            <List.Item.Meta
              title={
                link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                ) : (
                  title
                )
              }
              description={description}
            />
          </List.Item>
        )}
      />
    </AboutCard>
  )
}

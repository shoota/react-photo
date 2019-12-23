import React from 'react'

import { useLayout } from './hooks/useLayout'

import { Layout } from 'components/templates/Layout'

export const LayoutContainer: React.FC = ({ children }) => {
  const { title, onTitleClick, onMenuClick, onTwitterClick } = useLayout()
  return (
    <Layout
      title={title}
      onTitleClick={onTitleClick}
      onMenuClick={onMenuClick}
      onTwitterClick={onTwitterClick}
    >
      {children}
    </Layout>
  )
}

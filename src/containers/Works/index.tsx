import React from 'react'

import { useWorks } from './hooks/useWorks'

import { Works } from 'components/pages/Works'

export const WorksContainer: React.FC = () => {
  const {
    currentImageKey,
    datasource,
    onCancel,
    onListClick,
    onImageClick,
    visibleWork,
    visible,
  } = useWorks()

  return (
    <Works
      currentImageKey={currentImageKey}
      datasource={datasource}
      onCancel={onCancel}
      onListClick={onListClick}
      onImageClick={onImageClick}
      visibleWork={visibleWork}
      visible={visible}
    />
  )
}

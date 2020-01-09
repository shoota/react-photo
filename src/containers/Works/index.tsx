import React from 'react'

import { useWorks } from './hooks/useWorks'

import { Works } from 'components/pages/Works'

export const WorksContainer: React.FC = () => {
  const {
    currentImageKey,
    datasource,
    onListClick,
    onImageClick,
    visibleWork,
    visible,
  } = useWorks()

  return (
    <Works
      currentImageKey={currentImageKey}
      datasource={datasource}
      onListClick={onListClick}
      onImageClick={onImageClick}
      visibleWork={visibleWork}
      visible={visible}
    />
  )
}

import { useState, ComponentProps, useCallback } from 'react'

import { Works } from 'components/pages/Works'
import datasource from 'data/works.json'
import { anchorHandler } from 'containers/utils/anchorClickHandler'

export const useWorks = (): ComponentProps<typeof Works> => {
  const [currentImageKey, setCurrentImageKey] = useState(0)
  const [visibleWork, setVisibleWork] = useState(datasource[0])
  const [visible, setVisible] = useState(false)

  const onCancel = useCallback(() => setVisible(false), [])

  const onListClick = useCallback(
    (searchKey: string) =>
      anchorHandler(() => {
        const hit = datasource.find(({ key }) => key === searchKey)
        if (hit !== undefined) {
          setCurrentImageKey(0)
          setVisibleWork(hit)
          setVisible(true)
        }
      }),
    []
  )

  const onImageClick = useCallback(
    anchorHandler(() => {
      if (currentImageKey < visibleWork.files.length - 1) {
        return setCurrentImageKey(currentImageKey + 1)
      }
      return setVisible(false)
    }),
    [currentImageKey, visibleWork.files.length]
  )

  return {
    currentImageKey,
    datasource,
    onCancel,
    onListClick,
    onImageClick,
    visibleWork,
    visible,
  }
}

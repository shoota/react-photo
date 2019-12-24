import { useState, ComponentProps, useCallback } from 'react'

import { Day } from 'components/pages/Day'
import days from 'data/days.json'

export const useDays = (): ComponentProps<typeof Day> => {
  const [index, setIndex] = useState(0)

  const onPrevClick = useCallback(() => {
    setIndex(index - 1)
  }, [index])
  const onNextClick = useCallback(() => {
    setIndex(index + 1)
  }, [index])

  const { date, src, title, hasNext, hasPrev } = days[index]
  return {
    date,
    src,
    title,
    hasPrev,
    hasNext,
    onPrevClick,
    onNextClick,
  }
}

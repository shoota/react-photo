import React from 'react'
import dayjs from 'dayjs'

import { useDays } from './hooks/useDays'

import { Day } from 'components/pages/Day'

export const DaysContainer: React.FC = () => {
  const {
    date,
    src,
    title,
    hasPrev,
    hasNext,
    onPrevClick,
    onNextClick,
  } = useDays()

  return (
    <Day
      date={dayjs(date).format('YYYY MM/DD')}
      src={src}
      title={title}
      hasPrev={hasPrev}
      hasNext={hasNext}
      onPrevClick={onPrevClick}
      onNextClick={onNextClick}
    />
  )
}

import React from 'react'

import { useAbout } from './hooks/useAbout'

import { About } from 'components/pages/About'

export const AboutContainer: React.FC = () => {
  const { avatarUrl, name, profileDescriptions, profileDetails } = useAbout()

  return (
    <About
      avatarUrl={avatarUrl}
      name={name}
      profileDescriptions={profileDescriptions}
      profileDetails={profileDetails}
    />
  )
}

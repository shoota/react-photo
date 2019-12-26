import { ComponentProps } from 'react'

import {
  avatarUrl,
  name,
  profileDescriptions,
  profileDetails,
} from 'data/about.json'
import { About } from 'components/pages/About'

export const useAbout = (): ComponentProps<typeof About> => {
  return {
    avatarUrl,
    name,
    profileDescriptions,
    profileDetails,
  }
}

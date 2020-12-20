import { ComponentProps, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router'

import { Layout } from 'components/templates/Layout'
import SiteConfig from 'data/site.json'
import { anchorHandler } from 'containers/utils/anchorClickHandler'

const TWITTER_URL = 'https://twitter.com/'

export const useLayout = (): ComponentProps<typeof Layout> => {
  const history = useHistory()
  const { pathname } = useLocation()
  const currentKey = pathname === '/' ? '/days' : pathname
  const onMenuClick = useCallback(
    ({ key }) => {
      history.push(key)
    },
    [history]
  )

  const onTitleClick = useCallback(
    anchorHandler(() => history.push('/')),
    [history]
  )

  const onTwitterClick = useCallback(() => {
    const url = `${TWITTER_URL}${SiteConfig.twitterAccount}`
    window.open(url, '_blank')
  }, [])

  return {
    tabKey: currentKey,
    title: SiteConfig.blogTitle,
    onMenuClick,
    onTitleClick,
    onTwitterClick,
  }
}

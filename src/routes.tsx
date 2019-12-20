import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Day } from 'components/pages/Day'
import { Layout } from 'components/templates/Layout'

const Example = () => {
  return (
    <Day
      title="さんぷる"
      date="2000-01-01"
      src="./assets/works/inorganicStructure/01.jpg"
      hasNext
      hasPrev
    />
  )
}

export const Routes = () => (
  <BrowserRouter>
    <Layout
      title="日々是好日"
      onMenuClick={() => undefined}
      onTitleClick={() => undefined}
    >
      <Switch>
        <Route component={Example} path="/" exact />
      </Switch>
    </Layout>
  </BrowserRouter>
)

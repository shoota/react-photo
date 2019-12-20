import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Day } from 'components/pages/Day'

const Example = () => {
  return (
    <Day
      title="example"
      date="2000-01-01"
      src="./assets/works/inorganicStructure/01.jpg"
    />
  )
}

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Example} path="/" exact />
    </Switch>
  </BrowserRouter>
)

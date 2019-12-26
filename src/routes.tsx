import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Day } from 'components/pages/Day'
import { LayoutContainer } from 'containers/Layout'
import { DaysContainer } from 'containers/Days'
import { AboutContainer } from 'containers/About'

const Example: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Day
      title={title}
      date="2000-01-01"
      src="assets/works/inorganicStructure/01.jpg"
      hasNext
      hasPrev
    />
  )
}

export const Routes = () => (
  <BrowserRouter>
    <LayoutContainer>
      <Switch>
        <Route component={() => <Example title="root" />} path="/" exact />
        <Route component={DaysContainer} path="/days" exact />
        <Route
          component={() => <Example title="works" />}
          path="/works"
          exact
        />
        <Route component={AboutContainer} path="/about" exact />
      </Switch>
    </LayoutContainer>
  </BrowserRouter>
)

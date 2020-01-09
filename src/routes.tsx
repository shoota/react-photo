import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { LayoutContainer } from 'containers/Layout'
import { DaysContainer } from 'containers/Days'
import { AboutContainer } from 'containers/About'
import { WorksContainer } from 'containers/Works'

export const Routes = () => (
  <BrowserRouter>
    <LayoutContainer>
      <Switch>
        <Route component={DaysContainer} path="/" exact />
        <Route component={DaysContainer} path="/days" exact />
        <Route component={WorksContainer} path="/works" exact />
        <Route component={AboutContainer} path="/about" exact />
      </Switch>
    </LayoutContainer>
  </BrowserRouter>
)

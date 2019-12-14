import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Card } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 40px;
`

const Example = () => {
  return (
    <Wrapper>
      <Card title="hello react">
        <h1>webpack Example</h1>
      </Card>
    </Wrapper>
  )
}

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Example} path="/" exact />
    </Switch>
  </BrowserRouter>
)

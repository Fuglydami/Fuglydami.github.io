import React, { Suspense } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { openSourceSection } from './techfolio'
import Loading from './Components/common/Loading.js'
import { useEffect } from 'react'
const App = React.lazy(() => import('./App'))
const key = openSourceSection.githubToken
  ? openSourceSection.githubToken.replace(/^"(.*)"$/, '$1')
  : ''

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${atob(key)}`,
      },
    })
  },
})

export default (
  <ApolloProvider client={client}>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </ApolloProvider>
)

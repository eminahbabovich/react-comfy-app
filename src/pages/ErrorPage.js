import React from 'react'
import styled from 'styled-components'
import { Link, useRouteError } from 'react-router-dom'
const ErrorPage = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <Wrapper>
        <section>
          <h1>404</h1>
          <h3>Sorry, the page you tried cannot be found</h3>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </section>
      </Wrapper>
    )
  } else
    return (
      <Wrapper>
        <section>
          <h3>There was an error...</h3>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </section>
      </Wrapper>
    )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage

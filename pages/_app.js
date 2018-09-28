import React from 'react'
import App, { Container } from 'next/app'

import Navigation from '../components/Navigation'

import './app.sass'

export default class EventfulApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Navigation/>
        <Component {...pageProps} />
      </Container>
    )
  }
}
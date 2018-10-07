import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import config from '../config.json'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet()
    const styleTags = sheet.getStyleElement()
    return { ...initialProps, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Ubuntu:300i,400,700" rel="stylesheet"></link>
          <meta name="viewport" content="width=device-width"/>
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"></link>
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon"></link>
          <title>Eventful</title>
          <style>{`
            *{
                font-family: Ubuntu, sans-serif;
            }
            body { 
              margin: 0;
              padding: 0;
            }
            h1, h2, h3, h4, h5, li, p {
                color: ${config.colors.grey1}
            }
          `}</style>
          {this.props.styleTags}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
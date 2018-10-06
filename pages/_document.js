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
          <style>{`
            @import url('https://fonts.googleapis.com/css?family=Ubuntu:300i,400,700');
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
            a{
                color: ${config.colors.red};
                text-decoration: none;
            }
            a:hover{
                text-decoration: underline;
            }
          `}</style>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width"/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
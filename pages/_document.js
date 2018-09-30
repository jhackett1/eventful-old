
import Document, { Head, Main, NextScript } from 'next/document'
import config from '../config.json'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
        </Head>
        <body className="custom_class">
          <style jsx>{`
              body{
                margin: 0;
                padding: 0
              }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/himkt.favicon.png"></link>
    </Head>
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        </div>
        <div id="navbarmenu" className="navbar-menu">
          <div className="navbar-start">
            <Link prefetch href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link prefetch href="/elsewhere">
              <a className="navbar-item">Elsewhere</a>
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a onClick={() => alert('You clicked the button!')} className="button is-primary">Click</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout

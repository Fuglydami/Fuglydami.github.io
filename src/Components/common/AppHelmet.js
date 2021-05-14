import React from 'react'
import { Helmet } from 'react-helmet'
export default function AppHelmet({ app }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={app.description} />
      <meta property="og:title" content="Damilare Oyedeji" />
      <meta property="og:description" content={app.title} />
      <meta property="og:image" content="../../assets/imgs/avatar.jpg" />
      <meta property="og:image:alt" content="Damilare Oyedeji" />
      <meta property="og:url" content="https://fuglydami.github.io/" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{app.title}</title>
      <link rel="canonical" href="http://fuglydami.github.io" />
      <link
        rel="icon"
        type="image/png"
        href={require(`../../assets/imgs/${
          app.icon ? app.icon : 'avatar.jpg'
        }`)}
        sizes="500x500"
      />
      <link rel="canonical" href="https://fuglydami.github.io/" />
    </Helmet>
  )
}

import { Helmet } from 'react-helmet-async'

import { useMetaDataValue } from 'utils/hooks/useMetaData'

const Provider = function ({ children }: { children: React.ReactNode }) {
  const themeColor = useMetaDataValue('title.theme-color')
  const title = useMetaDataValue('title')
  const description = useMetaDataValue('description')
  const keywords = useMetaDataValue('keyword')
  const image = useMetaDataValue('image')
  const canonical = useMetaDataValue('canonical')
  const rss = useMetaDataValue('rss')
  const robots = useMetaDataValue('robots')
  const locale = useMetaDataValue('locale')
  const type = useMetaDataValue('type')
  const url = useMetaDataValue('url')
  const shortlink = useMetaDataValue('shortlink')
  const site_name = useMetaDataValue('site_name')

  const twitter = {
    card: useMetaDataValue('twitter.card'),
    creator: useMetaDataValue('twitter.creator'),
    site: useMetaDataValue('twitter.site'),
  }

  const article = {
    author: useMetaDataValue('twitter.author'),
    published_time: useMetaDataValue('twitter.published_time'),
    modified_time: useMetaDataValue('twitter.modified_time'),
  }

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={themeColor} />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="twitter:description" content={description} />
          </>
        )}
        {keywords && <meta name="keywords" content={keywords}></meta>}
        {image && (
          <>
            <meta property="og:image" content={image} />
            <meta property="twitter:image" content={image} />
          </>
        )}
        {canonical && <link rel="canonical" href={canonical} />}
        {url && (
          <>
            <meta property="og:url" content={url} />
            <meta property="twitter:url" content={url} />
          </>
        )}
        {shortlink && <link rel="shortlink" href={shortlink} />}
        {locale && <meta property="og:locale" content={locale} />}
        {type && <meta property="og:type" content={type} />}
        {twitter.card && <meta name="twitter:card" content={twitter.card} />}
        {rss && (
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href={rss}
          ></link>
        )}
        {robots && <meta name="robots" content={robots} />}
        {site_name && <meta property="og:site_name" content={site_name} />}
        {article.author && (
          <>
            <meta property="article:author" content={article.author} />
            <meta property="article:publisher" content={article.author} />
          </>
        )}
        {article.published_time && (
          <meta
            property="article:published_time"
            content={article.published_time}
          />
        )}
        {article.modified_time && (
          <meta
            property="article:modified_time"
            content={article.modified_time}
          />
        )}
        {twitter.creator && (
          <meta name="twitter:creator" content={twitter.creator} />
        )}
        {twitter.site && <meta name="twitter:site" content={twitter.site} />}
        {/* <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="XYZ" />
      <meta name="twitter:label2" content="Est. reading time" />
      <meta name="twitter:data2" content="X minutes" /> */}
      </Helmet>
      {children}
    </>
  )
}

export default Provider

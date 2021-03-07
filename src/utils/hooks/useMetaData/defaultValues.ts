import flat from 'flat'

const defaultValues = flat<Record<string, unknown>, Record<string, string>>({
  'theme-color': '#000000',
  title: 'Untitled',
  description: '',
  keywords: '',
  url: '',
  shortlink: '',
  image: '',
  site_name: '',
  twitter: {
    'image:alt': '',
    card: '', // `summary`, `summary_large_image`, `app`, or `player`.
    site: '', // @username
    creator: '', // @username
  },
  fb: {
    app_id: '',
  },
  canonical: '',
  rss: '',
  // robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  locale: 'en_US',
  // 'locale:alternate': 'vi_VN', // comma-separated
  type: '', // https://ogp.me/#types
  audio: '',
  video: '',
  article: {
    author: '', // url
    published_time: '', // 2016-06-20T13:18:32+00:00
    modified_time: '',
  },
})

export default defaultValues

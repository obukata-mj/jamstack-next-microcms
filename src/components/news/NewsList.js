import { Link } from '@/utils/common-components'
import { formatDate, formatDotSplitDate } from '@/utils/utilities.js'

export default function NewsList({ news, limit = news.length }) {
  return (
    <>
      {news.slice(0, limit).map((news) => (
        <article key={news.id} className="news__item">
          <Link href={`/news/${news.id}`} className="news__item-link">
            <time datetime={formatDate(news.publishedAt)} className="news__item-time">{formatDotSplitDate(news.publishedAt)}</time>
            <p className="news__item-title">{news.title}</p>
          </Link>
        </article>
      ))}
    </>
  )
}

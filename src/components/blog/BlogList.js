import { Link, Image } from '@/utils/common-components'
import { formatDate, formatDotSplitDate } from '@/utils/utilities.js'

export default function BlogList({ blog }) {
  return (
    <div className="blog__list">
      {blog.map((blog) => (
        <article key={blog.id} className="blog__item">
          <Link href={`/blog/${blog.id}`}>
            <div className="blog__item-image">
              <Image
                src={blog.mainImage.url}
                width={blog.mainImage.width}
                height={blog.mainImage.height}
                alt=""
              />
            </div>
            <div className="blog__item-detail">
              <time datetime={formatDate(blog.publishedAt)} className="blog__item-time">{formatDotSplitDate(blog.publishedAt)}</time>
              <p className="blog__item-title">{blog.title}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
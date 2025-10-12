import { client } from "@/libs/client";
import { Link, Image } from '@/utils/common-components'
import NewsList from '@/components/news/NewsList'

export default function news({ news }) {
  return (
    <div className="section__group">
      <section className="news section">
        <div className="section__container">
          <div className="section__head">
            <h2 className="section__title">お知らせ</h2>
          </div>
          <div className="news__body">
            <NewsList news={news} />
          </div>
        </div>
      </section>
    </div>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const newsData = await client.get({ endpoint: 'news' })

  return {
    props: {
      news: newsData.contents
    },
  };
};
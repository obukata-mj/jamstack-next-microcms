import { client } from "@/libs/client";
import { Link, Image } from '@/utils/common-components'
import BlogList from '@/components/blog/BlogList'

export default function blog({ blog }) {
  return (
    <div className="section__group">
      <section className="blog section">
        <div className="section__container">
          <div className="section__head">
            <h2 className="section__title">ブログ</h2>
          </div>
          <div className="blog__body">
            <div className="divide-y">
              <BlogList blog={blog} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
import { client } from "@/libs/client";
import Hero from '@/components/layouts/Hero'
import BlogList from '@/components/blog/BlogList'
import NewsList from '@/components/news/NewsList'
import { Link } from '@/utils/common-components'

export default function Home({ blog, news }) {
  return (
    <div>
      <Hero />
      <div className="section__group">

        <section className="news section">
          <div className="section__container">
            <div className="section__head">
              <h2 className="section__title">お知らせ</h2>
              <Link href="/news/" className="news__btn btn" data-color="red" data-size="small">
                <span className="btn__body">一覧を見る</span>
                <span className="btn__append" data-style="circle"><span className="icon-[flowbite--chevron-right-outline]"></span></span>
              </Link>
            </div>
            <div className="news__body">
              <NewsList news={news} limit="3" />
            </div>
          </div>
        </section>

        <section className="blog section">
          <div className="section__container">
            <div className="section__head">
              <h2 className="section__title">ブログ</h2>
              <Link href="/blog/" className="blog__btn btn" data-color="red" data-size="small">
                <span className="btn__body">一覧を見る</span>
                <span className="btn__append" data-style="circle"><span className="icon-[flowbite--chevron-right-outline]"></span></span>
              </Link>
            </div>
            <div className="blog__body">
              <BlogList blog={blog} />
            </div>
          </div>
        </section>

        <section className="section">
          <div id="保育理念" className="link-anchor"></div>
          <div className="section__container">
            <div className="section__head">
              <h2 className="section__title">保育理念</h2>
            </div>
            <div className="section__body">
              <p>ひとりひとりの個性を大切に、少人数でしかできないあたたかい家庭的な雰囲気の中で楽しく集団生活を送り、年齢に応じた生活習慣を身に付けながら健全かつ個性豊かな人格形成の基礎を培います。</p>
            </div>
          </div>
        </section>
        <section className="section">
          <div id="特色" className="link-anchor"></div>
          <div className="section__container">
            <div className="section__head">
              <h2 className="section__title">特色</h2>
            </div>
            <div className="section__body">
              <ul className="list-disc pl-6">
                <li>配置基準を上回る職員配置で、ゆとりのある保育を行います。</li>
                <li>保育園の園庭でゆったり遊んだり、石橋文化幼稚園の広い園庭でのびのび遊ぶことができます。</li>
                <li>栄養士指導のもと、有機食材を使用したおいしい給食、おやつを自園調理しています。</li>
                <li>季節の行事や参観日を実施しています。</li>
                <li>オムツ、おしり拭き持参不要で、少ない荷物で登園していただけます。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div id="開所時間" className="link-anchor"></div>
          <div className="section__container">
            <div className="section__head">
              <h2 className="section__title">開所時間</h2>
            </div>
            <div className="section__body">
              <div className="overflow-auto">
                <table className="table min-w-full w-max">
                  <thead className="table__thead">
                    <tr className="table__row">
                      <th className="table__head"></th>
                      <th className="table__head">保育時間</th>
                      <th className="table__head">時間外延長保育</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table__row">
                      <th className="table__head">保育標準時間</th>
                      <td className="table__description">7時30分〜18時30分</td>
                      <td className="table__description">
                        18時30分〜19時00分<br />
                        <small>（400円/30分）</small>
                      </td>
                    </tr>
                    <tr className="table__row">
                      <th className="table__head">保育短時間</th>
                      <td className="table__description">9時00分〜17時00分</td>
                      <td className="table__description">
                        7時30分〜8時30分<br />
                        17時00分〜19時00分<br />
                        <small>（400円/30分）</small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div id="定員数" className="link-anchor"></div>
          <div className="section__container">
            <div className="section__head">
              <h2 className="section__title">定員数</h2>
            </div>
            <div className="section__body">
              <div className="overflow-auto">
                <table className="table min-w-full w-max">
                  <tbody>
                    <tr className="table__row">
                      <th className="table__head">0歳児</th>
                      <td className="table__description">
                        3名<br />
                        <small>※0歳児（6ヶ月～）</small>
                      </td>
                    </tr>
                    <tr className="table__row">
                      <th className="table__head">1歳児</th>
                      <td className="table__description">8名</td>
                    </tr>
                    <tr className="table__row">
                      <th className="table__head">2歳児</th>
                      <td className="table__description">8名</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div id="開所しない日" className="link-anchor"></div>
          <div className="section__container">
            <div className="section__head">
              <h2 className="section__title">開所しない日</h2>
            </div>
            <div className="section__body">
              <p>日曜日・祝日、年末年始</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__container">
            <div className="address__box glass">
              <div className="flex justify-between items-center flex-wrap">
                <div className="text-[var(--theme-500)]">
                  <p className="leading-normal">
                    MJ学園
                  </p>
                  <p className="text-[1.875em] font-bold leading-relaxed">MJ保育園</p>
                </div>
                <div>
                  <p className="font-bold">TEL</p>
                  <p className="text-[1.875em] font-bold leading-none">000-000-0000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blogData = await client.get({ endpoint: "blog" })
  const newsData = await client.get({ endpoint: 'news' })

  return {
    props: {
      blog: blogData.contents,
      news: newsData.contents
    },
  };
};
import { Link } from '@/utils/common-components'

export default function Custom404() {
  return (
    <div className="section__group">
      <section className="section">
        <div className="section__container">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-center">404 Not Found.</h1>
            <p className="w-fit mx-auto">ページが存在しません</p>
          </div>
          <div className="text-center">
            <Link className="btn" href="/">
              <span className="btn__body">トップページへ戻る</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
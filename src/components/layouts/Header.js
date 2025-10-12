import { Link, Image } from '@/utils/common-components'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo logo">
          <Image
            className="logo__symbol"
            src="/images/common/logo.svg"
            alt=""
            width="500"
            height="500"
            decoding="async"
          />
          MJ保育園
        </Link>
        <nav className="header__navigation">
          <div className="header__navigation-menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <Link className="menu__link" href="/#保育理念">
                  保育理念
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" href="/#特色">
                  特色
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" href="/#開所時間">
                  開所時間
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" href="/#定員数">
                  定員数
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" href="/#開所しない日">
                  開所しない日
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  className="btn"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSewg1G1-DhgpTM7XiRnxUaABFKoC-zgFQdee5XGvaVLpUQTqw/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn__prepend">
                    <span className="icon-[solar--letter-bold]"></span>
                  </span>
                  <span className="btn__body">お問い合わせ</span>
                </Link>
              </li>
            </ul>
            <ul className="menu__list" data-menu="submenu">
              <li className="menu__item">
                <Link className="menu__link" href="/news/">
                  [オプション]お知らせ
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" href="/blog/">
                  [オプション]ブログ
                </Link>
              </li>
            </ul>
          </div>

          <button id="drawer-toggle-button" className="header__open-button">
            <span className="header__toggle-drawer-icon">
              <span className="icon icon-[tabler--menu-2]" data-icon="closed"></span>
              <span className="icon icon-[tabler--x]" data-icon="opened"></span>
            </span>
          </button>

          <dialog id="drawer" className="header__drawer drawer" tabIndex={0}>
            <div className="header__drawer-body">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link className="menu__link" href="/#保育理念">
                    保育理念
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" href="/#特色">
                    特色
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" href="/#開所時間">
                    開所時間
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" href="/#定員数">
                    定員数
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" href="/#開所しない日">
                    開所しない日
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    className="btn"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSewg1G1-DhgpTM7XiRnxUaABFKoC-zgFQdee5XGvaVLpUQTqw/viewform?usp=sf_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn__prepend">
                      <span className="icon-[solar--letter-bold]"></span>
                    </span>
                    <span className="btn__body">お問い合わせ</span>
                  </Link>
                </li>
              </ul>
              <ul className="menu__list" data-menu="submenu">
                <li className="menu__item">
                  <Link className="menu__link" href="/news/">
                    [オプション]お知らせ
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" href="/blog/">
                    [オプション]ブログ
                  </Link>
                </li>
              </ul>
            </div>
          </dialog>
        </nav>
      </div>
    </header>
  );
};


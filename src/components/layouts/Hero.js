import Image from 'next/image'

// Swiper
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
// import 'swiper/css/autoplay'

export default function Hero() {
  return (
    <section className="section hero">
      <Swiper
        className="hero__slider"
        modules={[Autoplay]}
        speed={1000}
        autoplay={{delay: 3000}}
        loop
      >
        <SwiperSlide className="hero__slider-item item01"><Image src="/images/common/hero-img01.jpg" alt="" width="1920" height="1440" decoding="async" /></SwiperSlide>
        <SwiperSlide className="hero__slider-item item02"><Image src="/images/common/hero-img02.jpg" alt="" width="1920" height="1440" decoding="async" /></SwiperSlide>
        <SwiperSlide className="hero__slider-item item03"><Image src="/images/common/hero-img03.jpg" alt="" width="1920" height="1440" decoding="async" /></SwiperSlide>
      </Swiper>
      <div className="hero__detail">
        <div className="hero__box glass">
          <div className="hero__head">
            <div>
              <h1 className="hero__title">
                <span className="logo">
                  <Image className="logo__symbol" src="/images/common/logo.svg" alt="" width="500" height="500" decoding="async" />
                  MJ保育園
                </span>
              </h1>
            </div>
            <div className="hero__infodata">
              <div className="hero__infodata-item">
                <div className="hero__infodata-title">所在地</div>
                <div className="hero__infodata-text">
                  〒000-0000<br />
                  ＃＃市＃＃0丁目00-00
                </div>
              </div>
              <div className="hero__infodata-item">
                <div className="hero__infodata-title">開園日</div>
                <div className="hero__infodata-text">令和5年11月1日</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
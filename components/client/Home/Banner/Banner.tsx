'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import ImageCustoms from '@/components/customUI/ImageCustoms'
import Link from 'next/link'
import './Banner.scss'
import { Button } from '../../../ui/button'

export default function Banner() {
    const slides = []
    for (let i = 0; i < 5; i++) {
        slides.push(
            <SwiperSlide>
                <div className="box-banner">
                    <div key={i} className="img-ratio lg:ratio:pt-[960_1920] -lg:ratio:pt-[16_10]">
                        <ImageCustoms />
                    </div>
                    <div className="overlay-border"></div>
                    <div className="overlay-blur"></div>
                    <div className="content-banner">
                        <div className="title-banner">
                            <div className="format-content space-y-3">
                                <div className="body-2 line-clamp-3 font-extralight">
                                    <p>
                                        In Lorem voluptate ut consectetur. Cillum ullamco aliqua fugiat ad sit labore
                                        excepteur duis occaecat. Cillum amet labore ex labore esse irure enim fugiat
                                        quis ad adipisicing est. Nulla tempor culpa pariatur ullamco.
                                    </p>
                                </div>
                                <div className="heading-3 font-bold uppercase">
                                    <h1 className="">proavl</h1>
                                </div>
                            </div>
                            <Link
                                href="/"
                                className="py-3 px-6 body-2 uppercase bg-black border border-white rounded-full"
                            >
                                kham pha ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>,
        )
    }

    return (
        <section className="relative">
            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                speed={800}
                effect="fade"
                // autoplay={{ delay: 4000 }}
                className="-lg:h-screen"
            >
                {slides}
            </Swiper>
            <Link href="#section_1">
                <Button
                    variant={'outline'}
                    className="text-white heading-2 rem:h-[60px] aspect-square absolute-center-x bottom-5 z-2 p-2.5 rounded-full"
                >
                    <i className="fa-light fa-arrow-down"></i>
                </Button>
            </Link>
        </section>
    )
}

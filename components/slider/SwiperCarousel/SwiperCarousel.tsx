'use client'

import React, { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade, Mousewheel } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import './SwiperCarousel.scss'

type PropType = {
    slides: ReactNode[]
    options?: SwiperOptions
    className?: string
    showNav?: boolean
    showPag?: boolean
}

const SwiperCarousel: React.FC<PropType> = (props) => {
    const { slides, options, className, showNav = true, showPag = true } = props

    const defaultOptions: SwiperOptions = {
        modules: [Navigation, Pagination, Autoplay, EffectFade, Mousewheel],
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: showPag ? { clickable: true } : false,
        navigation: showNav ? true : false,
        ...options,
    }

    return (
        <div className={`swiper-carousel-wrapper ${className || ''}`}>
            <Swiper {...defaultOptions}>
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperCarousel

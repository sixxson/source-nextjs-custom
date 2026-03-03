'use client'

import React, { ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useDotButton, usePrevNextButtons } from '@/hooks/embla/useEmblaControls'
import './EmblaCarousel.scss'

type PropType = {
    slides: ReactNode[]
    options?: EmblaOptionsType
    plugins?: EmblaPluginType[]
    className?: string
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options, plugins, className } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins || [Autoplay()])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

    return (
        <div className={`embla ${className || ''}`}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <button
                        className="embla__button embla__button--prev"
                        type="button"
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    >
                        <i className="fa-light fa-chevron-left"></i>
                    </button>
                    <button
                        className="embla__button embla__button--next"
                        type="button"
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    >
                        <i className="fa-light fa-chevron-right"></i>
                    </button>
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel

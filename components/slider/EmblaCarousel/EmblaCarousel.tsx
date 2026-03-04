'use client'

import React, { ReactNode } from 'react'
import { useEmblaInit, EmblaInitProps } from '@/hooks/embla/useEmblaInit'
import './EmblaCarousel.scss'

type PropType = {
	slides: ReactNode[]
	className?: string
} & EmblaInitProps

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, className, ...rest } = props

	const {
		emblaRef,
	} = useEmblaInit(rest)

	return (
		<div className={`embla w-full embla__logo ${className || ''}`}>
			<div className="embla__viewport overflow-hidden" ref={emblaRef}>
				<div className="embla__container flex gap-5">
					{slides.map((slide, index) => (
						<div className="embla__slide flex-center flex-[0_0_calc(100%/7.5)]" key={index}>
							{slide}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default EmblaCarousel

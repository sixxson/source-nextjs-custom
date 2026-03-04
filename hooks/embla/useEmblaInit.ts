'use client'

import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useDotButton, usePrevNextButtons } from './useEmblaControls'

export type EmblaInitProps = {
	// Embla Options
	duration?: number
	dragFree?: boolean
	startIndex?: number
	axis?: 'x' | 'y'
	align?: 'start' | 'center' | 'end' | number
	loop?: boolean
	watchDrag?: boolean
	containScroll?: '' | 'trimSnaps' | 'keepSnaps'
	// Autoplay Options
	autoplay?: boolean
	delay?: number
	stopOnMouseEnter?: boolean
	stopOnInteraction?: boolean
	// Overrides
	options?: EmblaOptionsType
	plugins?: EmblaPluginType[]
}

export function useEmblaInit(props: EmblaInitProps = {}) {
	const {
		duration = 1000,
		dragFree = false,
		startIndex = 0,
		axis = 'x',
		align = 'start',
		loop = false,
		watchDrag = true,
		containScroll = '',
		autoplay = false,
		delay = 2000,
		stopOnMouseEnter = false,
		stopOnInteraction = false,
		options,
		plugins,
	} = props

	const mergedOptions: EmblaOptionsType = {
		duration,
		dragFree,
		startIndex,
		axis,
		align: align as EmblaOptionsType['align'],
		loop,
		watchDrag,
		containScroll: containScroll as EmblaOptionsType['containScroll'],
		...options,
	}

	const defaultPlugins = autoplay
		? [
				Autoplay({
					delay,
					stopOnMouseEnter,
					stopOnInteraction,
				}),
			]
		: []

	const [emblaRef, emblaApi] = useEmblaCarousel(mergedOptions, plugins || defaultPlugins)

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

	return {
		emblaRef,
		emblaApi,
		selectedIndex,
		scrollSnaps,
		onDotButtonClick,
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	}
}

//Test Tips
// import { DirectVet, TruePortable } from "../../../../public/tips";

//Logos
import VetLogo from "/public/assets/image/logos/JPIVetLogo.png"
import MedLogo from "/public/assets/image/logos/JPIMedLogo.png"

//Product Logos
import DirectVetLogo from "/public/assets/image/productLogo/DirectVet.png"
import PanelLogo from "/public/assets/image/productLogo/Panel.png"
import TruePortableLogo from "/public/assets/image/productLogo/TruePortable.png"

//Product Images
import Panel from "/public/assets/image/products/Panel.png"
import DirectVet from "/public/assets/image/products/DirectVet.png"
import TruePortable from "/public/assets/image/products/TruePortable.png"

//Styling
import './styles.css'

import { useContext, useCallback, useEffect, useState } from 'react';
import { ProductContext, PracticeContext } from "../../../context/contextProviders";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../buttons';


import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
//Displaying the tips for the carousel 


export const ProductImages: React.FC = () => {
  const { product, setProduct } = useContext(ProductContext)
  return (
    <div className="productImage">
      {product === "Default" && <img src={Panel} height="235px" width="276px"/>}
      {product === "Panel" && <img src={Panel} height="235px" width="276px"/>}
      {product === "DirectVet" && <img src={DirectVet} height="310px" width="227px"/>}
      {product === "TruePortable" && <img src={TruePortable} height="310px" width="174.45px"/>}
    </div>
  )
}

export const ProductTitle: React.FC = () => {
  const { product, setProduct } = useContext(ProductContext)
  return (
    <div>
      {product === "Default" && <div>Flat Panel Detector</div>}
      {product === "Panel" && <div>Flat Panel Detector</div>}
      {product === "DirectVet" && <div>DirectVet</div>}
      {product === "TruePortable" && <div>TruePortable</div>}
    </div>
  )
}

export const Icon: React.FC = () => {
  const { practice, setPractice } = useContext(PracticeContext)
  return (
    <div className="titleBarLogo">
      {practice === "Default" && <img src={MedLogo} />}
      {practice === "Medical" && <img src={MedLogo} />}
      {practice === "Veterinary" && <img src={VetLogo} />}
    </div>
  )
}


export const ProductLogo: React.FC = () => {
  const { product, setProduct } = useContext(ProductContext)
  return (
    <div className="ProductLogoContainer">
      {product === "Default" && <img src={PanelLogo} width="297px" />}
      {product === "Panel" && <img src={PanelLogo} width="297px" />}
      {product === "DirectVet" && <img src={DirectVetLogo} width="297px" />}
      {product === "TruePortable" && <img src={TruePortableLogo} width="297px" />}
    </div>
  )
}

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

export const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 6000 })
  ])
  const [scrollProgress, setScrollProgress] = useState(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi.on('reInit', onScroll)
    emblaApi.on('scroll', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      </div>
    </div>
  )
}

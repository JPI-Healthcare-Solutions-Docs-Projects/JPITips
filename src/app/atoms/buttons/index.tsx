import './styles.css'
import { ProductContext, SettingsContext } from '../../context/contextProviders'
import { useContext, PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import prevButton from '/public/assets/image/buttons/prevButton.png'
import nextButton from '/public/assets/image/buttons/nextButton.png'
import CloseTipsButton from '/public/assets/image/buttons/CloseTipsButton.png'
// import { initialize, enable as enableRemote } from "@electron/remote/main";
// initialize();

export const CloseButton = () => {
  return (
    <div>
      <button className="closeTipsButton" onClick={()=> window.electron.ipcRenderer.sendMessage('close-window')}>
        <img src={CloseTipsButton}/>
      </button>
    </div>
  )
}

export const SettingsButton = () => {

  const { settings, setSettings } = useContext(SettingsContext);

  const test = () => {
    setSettings(true);
    return;
  }

  return (
    <div>
      <button className="settingButton" onClick={test}>
      </button>
    </div>
  )
}

export const BackButton = () => {

  const { settings, setSettings } = useContext(SettingsContext);

  const test = () => {
    setSettings(false);
    return;
  }

  return (
    <div>
      <button className="backButton" onClick={test}>
        back
      </button>
    </div>
  )
}

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button--prev"
      type="button"
      {...restProps}
    >
      <img src={prevButton} />
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button--next"
      type="button"
      {...restProps}
    >
      <img src={nextButton} />
      {children}
    </button>
  )
}
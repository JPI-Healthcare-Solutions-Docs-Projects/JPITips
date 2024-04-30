import { Title } from "../title";
import { Subtitle } from "../subtitle";
import Slider from "react-slick";
import {DirectVet, TruePortable} from "../../../../public/tips";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

export const SliderAtom: React.FC = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const tipChosen = DirectVet;

  return (
    <div className="container">
    <Slider {...settings}>
        {tipChosen.map(({title, tip}) => <div ><Title text={title}/><Subtitle text={tip}/></div>)}
    </Slider>
</div>
  )
}




import { Title } from "../../atoms/title"
import { Subtitle } from "../../atoms/subtitle"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

interface TipObjectType {
    title: string;
    tip: string;
    id: number;
}

export const TipsMolecule: React.FC = () => {

    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const test = [{title:"directvet", tip:"turn off cubex", id:0},{title:"directvet2", tip:"turn off cubex2", id:1}];

    return (
        <div>
            <div className="container">
                <Slider {...settings}>
                    {test.map(({title, tip, id}) => <div ><Title text={title}/><Subtitle text={tip}/></div>)}
                </Slider>
            </div>
        </div>
    )
}
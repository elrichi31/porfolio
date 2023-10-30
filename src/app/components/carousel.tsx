'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import ArticleCard from "./article_card";
import "./carousel.css"
function CarouselDefault() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        cssEase: "linear",        
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1281,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 913,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 660,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div>
            <Slider {...settings} className="my-14">
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
            </Slider>
            
        </div>
    );
}

export default CarouselDefault
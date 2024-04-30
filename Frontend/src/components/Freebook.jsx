import React from 'react'
import Slider from "react-slick"; /*react slick slider Website*/
import "slick-carousel/slick/slick.css";/*react slick slider Website */
import "slick-carousel/slick/slick-theme.css";/*react slick slider Website */
import list from "../../public/list.json";
import Cards from './Cards';

const Freebook = () => {
  //Filtering free book
  const filterData = list.filter((data) => data.category === "Free");//filterData is a array
  
  /*Taken from react slick slider Website------------------------------------------------*/
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  /*-------------------------------------------------------*/
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='font-semibold text-xl pb-2'>
          Free Offerd Course
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusamus. Earum asperiores sed laborum, repellendus architecto dolorum esse commodi, enim neque rem ipsum dolore soluta iure est accusantium voluptate nihil unde distinctio.
        </p>

        {/* /*Taken from react slick slider Website------------------------------------------------*/}
        <div>
          <Slider {...settings}>
            {
              /*Here filterData is a array */
              filterData.map((item) => (
                <Cards item={item} key={item.id} />

              )
              )

            }
          </Slider>
        </div>
        {/*/*-------------------------------------------------------*/}
      </div>
    </>
  )
}

export default Freebook
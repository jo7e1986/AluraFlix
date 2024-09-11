/* eslint-disable react/prop-types */
import Slider from "react-slick";
import VideoCard from "./VideoCard";

function Responsive({ videos, color }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} color={color} />
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;

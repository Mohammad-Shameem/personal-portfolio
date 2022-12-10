import React from "react";
import Slider from "react-slick";
import {
  FaCommentDollar,
  FaAccessibleIcon,
  FaPaintBrush,
  FaGlobe,
} from "react-icons/fa";
import { SiAnchor } from "react-icons/si";
import { MdOutlineBrandingWatermark } from "react-icons/md";

//slider css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SlickSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    easing: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slick-parent">
      {" "}
      <div>
        <Slider {...settings}>
          <div>
            <div className="slickslider-2">
              <span className="svg-icon">
                <FaGlobe></FaGlobe>
              </span>
              <div>
                <h2>Web Development</h2>
                <p>
                  As a Web Developer, I'm responsible for <br />
                  making and maintaining a website. I can <br />
                  develop your website and
                  <br /> make your website fast .
                </p>
              </div>
            </div>
          </div>
          <div className="slickslider-2">
            <span className="svg-icon">
              <SiAnchor></SiAnchor>
            </span>
            <div>
              <h2>Creative Design</h2>
              <p>
                We have new creativity in every website <br />
                design. You can easily get any kind of <br />
                website from us for your work.
              </p>
            </div>
          </div>
          <div className="slickslider-3">
            <span className="svg-icon">
              <FaPaintBrush></FaPaintBrush>
            </span>
            <div>
              <h2>Bug Cleaning</h2>
              <p>
                A simple Bug can destroy your website it <br />
                can make your site useless.Hire me if <br />
                there any bugs in your website . <br />I will take care of them.
              </p>
            </div>
          </div>
          <div className="slickslider-4">
            <span className="svg-icon">
              <MdOutlineBrandingWatermark></MdOutlineBrandingWatermark>
            </span>
            <div>
              <h2>SPA using React</h2>
              <p>
                These days SPA is much popular. <br />
                It can make your website too fast. <br />
                It can reduce your code and reduce waiting <br />
                time.
              </p>
            </div>
          </div>
          <div className="slickslider-3">
            <span className="svg-icon">
              <FaAccessibleIcon></FaAccessibleIcon>
            </span>
            <div>
              <h2>Responsive Web Desing</h2>
              <p>
                We leverage the concept of mobile-first design. <br />
                Through our work, we focus on designing an <br />
                experience that works across different screen <br />
                sizes.
              </p>
            </div>
          </div>

          <div className="slickslider-2">
            <span className="svg-icon">
              <FaCommentDollar></FaCommentDollar>
            </span>
            <div>
              <h2>UX Consultation</h2>
              <p>
                If you know what kind of service to <br />
                request from us, worry. We can help and <br></br>see what fits
                your business and your budget.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlickSlider;

import './Hero.css';
import hero_image from '../assets/hero_image.png';
import hero_img_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png';

import Header from './Header';
const Hero = () => {
  return (
    <div className="hero">
      <div className="leftside">
        <Header />
        {/* the best add */}
        <div className="the_best_club">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        {/* hero heading */}

        <div className="hero_text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              {' '}
              IN here we will help you to shape and build your ideas live up
              your life to fullest
            </span>
          </div>
        </div>

        {/* figures- */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Member Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Program</span>
          </div>
        </div>

        <div className="hero_btn">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="rightside">
        <button className="btn">Join Now</button>
        <div className="heart_rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </div>

        {/* hero img---  */}
        <img src={hero_image} alt="" className="heroImg" />
        <img src={hero_img_back} alt="" className="heroimgback" />
        {/* calories---- */}

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 KCAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

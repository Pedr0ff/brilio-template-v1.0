import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import MagneticButton from '../Miscellaneous/MagneticButton';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutOne = ({ 
  title = "J'aide les marques à maîtriser l'innovation créative et la planification stratégique dans le numérique.",
  subTitle = "Des idées aux réalités numériques : j'accompagne les marques en combinant stratégie et design innovant pour réussir dans un monde digital en pleine transformation.",
  buttonText = "A Propos",
  buttonLink = "/about"
}) => {

  useEffect(() => {
    setTimeout(() => {
      const splitElements = document.querySelectorAll(".reveal-text");

      if (splitElements.length === 0) return; // Prevents errors if no elements are found

      splitElements.forEach((element) => {
        // Ensure the text is properly split
        const text = new SplitType(element, { types: 'words, chars' });

        // GSAP animation for text reveal
        gsap.fromTo(
          text.chars,
          { color: "#B6BCC6" }, // Initial gray color
          {
            color: "#030712", // Target black color
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'top 20%',
              scrub: true,
            },
            stagger: 0.05, // Slight stagger for smoother animation
          }
        );
      });

      // Refresh ScrollTrigger after elements are updated
      ScrollTrigger.refresh();
    }, 300); // Delay ensures text splitting is fully applied

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        {/* Content */}
        <div className="content">
          <h2 className="title reveal-text mt-0">{title}</h2>
        </div>

        <div className="wrapper">
          <p className="sub-title">{subTitle}</p>
		<MagneticButton 
			href={buttonLink}
			className="btn-outline"
			>
			{buttonText}
		</MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;

import React, { useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    position: 'CEO, Themeland Inc.',
    image: '/img/client-1.jpg',
    content: `"We were blown away by Themeland's creativity, professionalism, and attention to detail. The results were beyond our expectations. We couldn't be happier! We would highly recommend Themeland to anyone in need of their services."`
  },
  {
    id: 2,
    name: 'Michael Lee',
    position: 'Chief Marketing Officer, XYZ Corporation',
    image: '/img/client-2.jpg',
    content: `"Working with Themeland was an absolute dream. They brought our vision to life and exceeded all of our expectations. We can't thank them enough! They were able to take our ideas and turn them into a reality that was even better than we had imagined."`
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    position: 'Head of Design, Creative Co.',
    image: '/img/client-1.jpg', // Note:  Jane Doe et Sarah Johnson ont la même image.  C'est probablement une erreur.
    content: `"It was a privilege to work with Themeland on our project. They demonstrated a deep understanding of our business, our customers, and our goals. Their innovative approach and dedication to excellence resulted in a finished product that exceeded our expectations."`
  }
];

const Testimonial = () => {
  useEffect(() => {
    // 1. Vérifiez si Swiper est disponible (important!)
    if (typeof window.Swiper === 'undefined') {
      console.error("Swiper is not loaded.  Make sure you have included the Swiper script in your index.html.");
      return; // Arrête l'exécution si Swiper n'est pas chargé
    }

    // 2. Vérifiez si l'élément .swiper-container existe
    const swiperContainer = document.querySelector('.swiper-container');
    if (!swiperContainer) {
      console.error("Swiper container not found.  Make sure you have an element with class 'swiper-container' in your JSX.");
      return; // Arrête l'exécution si le conteneur n'est pas trouvé
    }

    // 3. Vérifiez si Swiper est déjà initialisé (évite les initialisations multiples)
    if (swiperContainer.swiper) {
      console.warn("Swiper is already initialized on this element.");
      return; // Arrête l'exécution si Swiper est déjà initialisé
    }


    // 4. Initialisez Swiper
    const swiper = new window.Swiper(swiperContainer, {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false, // Continue l'autoplay
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      effect: "creative",  // Effet de transition
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: "fraction", // Type de pagination ("bullets", "progressbar", etc.)
      },
      on: {
        slideChangeTransitionStart: function () {
          // Utilisez this.el pour cibler les éléments *à l'intérieur* de ce Swiper spécifique
          this.el.querySelectorAll('.testimonial-thumb img').forEach(img => {
            img.classList.remove('animated', 'zoomIn');
            img.style.opacity = '0';
          });
        },
        slideChangeTransitionEnd: function () {
          // Utilisez this.el pour cibler les éléments *à l'intérieur* de ce Swiper spécifique
          this.el.querySelectorAll('.testimonial-thumb img').forEach(img => {
            img.classList.add('animated', 'zoomIn');
            img.style.opacity = '1';
          });
        }
      }
    });

    // 5. Fonction de nettoyage (détruit l'instance de Swiper au démontage)
    return () => {
      if (swiper) { // Vérifiez si l'instance existe avant de la détruire
        swiper.destroy(true, true); // Détruit l'instance, supprime les événements et nettoie le DOM
      }
    };
  }, []); // Tableau de dépendances vide


  return (
    <section className="testimonial">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="swiper-container slider-min items">
              <div className="swiper-wrapper">
                {testimonials.map((testimonial) => (
                  <div className="swiper-slide item" key={testimonial.id}>
                    <div className="testimonial text-center border rounded-5 p-4 p-md-5"> {/* p-md-5 pour un padding plus grand sur les écrans moyens */}
                      <div className="testimonial-meta">
                        <div className="testimonial-thumb">
                          <img
                            className="rounded-circle"
                            src={testimonial.image}
                            alt={testimonial.name}
                            style={{width: '80px', height: '80px', objectFit: 'cover'}}
                          /> {/* style pour forcer la taille et éviter la déformation */}
                        </div>
                        <h5 className="client-name mt-3 mb-1">{testimonial.name}</h5>
                        <span className="client-position">{testimonial.position}</span>
                      </div>
                      <div className="testimonial-content mt-4">
                        <p>{testimonial.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
import React from 'react';
import MagneticButton from '../Miscellaneous/MagneticButton'; // Assurez-vous que ce chemin est correct

const CTAOne = () => {
  // Définition des données du CTA directement dans le composant.
  const ctaData = {
    title: "Et si on créait quelque chose",  // Titre principal
    highlight: "Ensemble", // Mettez ici du texte à surligner (si besoin), ou laissez vide
    button: {
      text: "Contactez-moi !",  // Texte du bouton
      link: "/contact",       // Lien du bouton (adaptez si nécessaire)
      icon: "bi bi-arrow-right", // Icône du bouton (si vous l'utilisez)
    },
    socials: [  // Vos liens sociaux (modifiez-les)
      {
        name: "Instagram",
        link: "/#", // Remplacez par votre lien Instagram
      },
      {
        name: "Twitter",
        link: "/#", // Remplacez par votre lien Twitter
      },
      {
        name: "LinkedIn",
        link: "/#", // Remplacez par votre lien LinkedIn
      },
    ],
  };

  return (
    <section className="cta border-top border-light-subtle">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10 col-lg-7">
            <h2 className="title mb-0 mb-md-2">{ctaData.title}</h2>
            <div className="cta-text">
              {/* Affichage du texte de surlignage (s'il y en a un) */}
              {ctaData.highlight && (
                <span className="line-item">{ctaData.highlight}</span>
              )}
              <span className="line"></span> {/* Ligne de séparation (si vous l'utilisez) */}
              {/* Bouton magnétique (MagneticButton) */}
              <MagneticButton href={ctaData.button.link}>
                {ctaData.button.text}
               {ctaData.button.icon && <i className={ctaData.button.icon}></i>}
              </MagneticButton>
            </div>

            {/* Affichage des liens sociaux */}
            <div className="socials mt-5">
              <nav className="nav justify-content-center">
                {ctaData.socials.length > 0 ? (
                  ctaData.socials.map((social, index) => (
                    <a
                      key={index}
                      className="nav-link swap-icon"
                      href={social.link}
                      target="_blank" // Ouvre le lien dans un nouvel onglet
                      rel="noopener noreferrer" // Bonne pratique pour les liens externes
                    >
                      {social.name} <i className="icon rotate bi bi-arrow-right-short"></i>
                    </a>
                  ))
                ) : (
                  <p>Aucun lien social disponible.</p> // Message si aucun lien n'est défini
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true); // État de chargement
  const [error, setError] = useState(null); // État d'erreur
  const [isVisible, setIsVisible] = useState(false); // État pour l'animation
  const skillsRef = useRef(null);

  // Chargement des données (un useEffect séparé)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/themeland/brilio-json-1/skills');
        setSkillsData(response.data);
      } catch (error) {
        setError(error); // Stocke l'erreur dans l'état
        console.error("Erreur lors du chargement des compétences:", error);
      } finally {
        setLoading(false); // Indique que le chargement est terminé (succès ou échec)
      }
    };

    fetchData();
  }, []); // Tableau de dépendances vide = exécution au montage seulement


  // Intersection Observer (un useEffect séparé)
  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              // On utilise setIsVisible(true) SEULEMENT si l'élément est visible
              if (entries[0].isIntersecting) {
                  setIsVisible(true); // Déclenche l'animation
                  observer.disconnect(); // Arrête l'observation une fois l'animation lancée
              }
              // Pas besoin du else, l'état initial est false
          },
          { threshold: 0.3 } // Options de l'observer (vous pouvez les ajuster)
      );

      if (skillsRef.current) {
          observer.observe(skillsRef.current); // Commence l'observation
      }

      // Fonction de nettoyage (s'exécute au démontage du composant)
      return () => {
          observer.disconnect(); // Arrête *toujours* l'observation au démontage
      };
  }, []); // Tableau de dépendances vide : l'effet s'exécute une seule fois au montage


  if (loading) {
    return <div>Chargement des compétences...</div>; // Message de chargement
  }

  if (error) {
    return <div>Erreur lors du chargement des compétences : {error.message}</div>; // Affiche l'erreur
  }

  if (!skillsData) {
    return <div>Aucune donnée de compétences trouvée.</div>; // Message si aucune donnée
  }

  return (
    <section className="skills section-padding" ref={skillsRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="intro">
              <h3 className="title">{skillsData.title}</h3>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row items">
              {skillsData.items.map((item) => (
                <div key={item.id} className="col-12 col-md-6 item">
                  <div className="content">
                    <div className="heading d-flex align-items-center">
                      <i className={`icon ${item.icon}`}></i>
                      <h2 className="title m-0 ms-2">{item.value}</h2>
                    </div>
                    <span>{item.label}</span>
                    <p className="mt-3">{item.description}</p>
                  </div>
                </div>
              ))}

              {skillsData.skillsProgress.map((skill, index) => (
                <div key={index} className="col-12 col-md-6 item align-self-center">
                  <div className="content mt-5 mt-md-0">
                    <div className="progress">
                      <span className="title">{skill.title}</span>
                      <div
                        className={`progress-bar ${isVisible ? 'animate' : ''}`} // Classe CSS conditionnelle
                        style={{
                          width: isVisible ? `${skill.progress}%` : '0%', // Largeur basée sur l'état isVisible
                          opacity: isVisible ? 1 : 0, // Opacité basée sur isVisible
                        }}
                      >
                        <span>{skill.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
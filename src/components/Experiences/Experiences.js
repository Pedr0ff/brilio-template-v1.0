import React from 'react';

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      count: '01.',
      title: 'Création de StelR',
      position: 'CEO of StelR',
      date: 'Mars 2023 – at now',
      description: '',
    },
    {
      id: 2,
      count: '02.',
      title: 'Obtention diplôme "Developpeur web & web mobile',
      position: 'Diplomé DWWM',
      date: 'Mars 2023',
      description: '',
    },
    {
      id: 3,
      count: '03.',
      title: 'Reconversion Professionnelle',
      position: 'Etudiant chez Studi',
      date: 'Fev 2022 – Fev 2023',
      description: '',
    },
    {
      id: 4,
      count: '04.',
      title: 'Cuisinier',
      position: 'Commmis, Second, Chef de cuisine',
      date: 'Jui 2017 – Fev 2022',
      description: '',
    },
  ];

  return (
    <section className="experiences sticky primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-3">
            {/* Intro */}
            <div className="intro">
              <h3 className="title">Experiences</h3>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="row items">
              {experiences.map((experience) => (
                <div key={experience.id} className="col-12 col-md-6 item">
                  <div className="content">
                    <span className="count">{experience.count}</span>
                    <h4 className="title mt-0 mb-3">{experience.title}</h4>
                    <h6 className="position my-3">{experience.position}</h6>
                    <span className="badge small">{experience.date}</span>
                    <p>{experience.description}</p>
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

export default Experiences;

import React from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: "Quels services proposez-vous ?",
      answer: "J'offre une gamme de services comprenant la conception web, le branding, le marketing numérique, la conception UI/UX, etc. Chaque projet est adapté pour répondre à vos besoins et objectifs uniques.",
    },
    {
      question: "Comment puis-je commencer un projet avec vous ?",
      answer: "C'est simple ! Contactez-moi via le formulaire de contact sur mon site web avec les détails de votre projet, et je programmerai une consultation pour discuter de la façon dont nous pouvons travailler ensemble pour réaliser votre vision.",
    },
    {
      question: "Pouvez-vous m'aider avec la direction créative ou les idées ?",
      answer: "Absolument ! Que vous ayez une vision claire ou que vous ayez besoin d'aide pour développer des idées, j'offre une direction créative pour guider votre projet et garantir qu'il reflète votre marque ou votre style personnel.",
    },
    {
      question: "Quelle est votre structure tarifaire ?",
      answer: "Les prix varient en fonction de la portée et de la complexité du projet. Après une première discussion, je vous fournirai un devis personnalisé qui correspond à vos besoins spécifiques.",
    },
    {
      question: "Travaillez-vous avec des clients internationaux ?",
      answer: "Oui, je travaille avec des clients du monde entier. Grâce aux outils de collaboration à distance, nous pouvons facilement communiquer et travailler ensemble, quel que soit votre emplacement.",
    },
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="intro">
              <h3 className="title">Questions fréquentes</h3>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10">
            <div className="accordion accordion-flush" id="brilio-accordion">
              {faqData.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h4 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index + 1}`}
                    >
                      {faq.question}
                    </button>
                  </h4>
                  <div
                    id={`collapse${index + 1}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#brilio-accordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
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

export default FAQ;

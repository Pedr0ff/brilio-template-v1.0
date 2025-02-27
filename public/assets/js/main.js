/*----------------------------------------------
*
* [Main Scripts]
*
* Theme    : Brilio
* Version  : 1.0
* Author   : Themeland
* Support  : hridoy1272@gmail.com
*
----------------------------------------------*/

/*----------------------------------------------

[ALL CONTENTS]

1.  Responsive Menu  (À CONSERVER, mais à adapter, voir explications ci-dessous)
2.  Navigation       (À SUPPRIMER - Géré par React)
3.  Navbar Toggler   (À SUPPRIMER - Géré par React)
4.  Filter Items     (À SUPPRIMER - Géré par React, si vous l'utilisez)
5.  Transition      (À CONSERVER, mais à adapter, voir explications ci-dessous)

----------------------------------------------*/

(function ($) {

    'use strict';

    $(document).ready(function() { // Assurez-vous que tout est dans un DOMContentLoaded

        /*----------------------------------------------
        1. Responsive Menu  (À CONSERVER et ADAPTER)
        ----------------------------------------------*/

        function navResponsive() {
            let navbar = document.querySelector('.navbar .items');
            let menu = document.querySelector('#menu .items'); // Assurez-vous que l'ID #menu existe, et qu'il n'est PAS dans un composant géré par React!

            // Ensure both navbar and menu elements exist before proceeding
            if (navbar && menu) {
                menu.innerHTML = '';
                menu.appendChild(navbar.cloneNode(true));

                let icons = document.querySelectorAll('.menu .icon-arrow-right');
                icons.forEach(icon => {
                    icon.classList.remove('icon-arrow-right');
                    icon.classList.add('icon-arrow-down');
                });
            }
        }

        // Run navResponsive initially and on window resize
        navResponsive();
        window.addEventListener('resize', navResponsive);

        // Add 'children-{count}' class to dropdown menus
        let dropdownMenus = document.querySelectorAll('.menu .dropdown-menu'); // Assurez-vous que .menu n'est pas dans le header
        dropdownMenus.forEach(function (menu) {
            let children = menu.querySelectorAll('.dropdown').length;
            menu.classList.add('children-' + children);
        });

        // Add 'prevent' class to nav-links inside dropdown items
        let dropdownItems = document.querySelectorAll('.menu .nav-item.dropdown'); //Assurez vous que le .menu n'est pas dans le header
        dropdownItems.forEach(function (item) {
            let children = item.querySelectorAll('.nav-link');
            children.forEach(function (link) {
                link.classList.add('prevent');
            });
        });

        // Handle click events to show/hide dropdowns and handle smooth anchor links
        document.addEventListener('click', function (event) {
          let target = event.target;

          // Check if the clicked element is a .nav-link inside the #menu
          if (target.closest('#menu .nav-item .nav-link')) { //Assurez vous que le .menu n'est pas dans le header
              let navLink = target.closest('.nav-link');

              // Prevent the default action if the link has 'prevent' class
              if (navLink.classList.contains('prevent')) {
                  event.preventDefault();
              }

              let dropdown = navLink.nextElementSibling;
              if (dropdown) {
                  dropdown.classList.toggle('show');
              }

              // Ne faites *RIEN* ici concernant les liens "smooth-anchor".
              // Laissez React gérer ça.
          }

            // Handle empty anchor links
            if (event.target.matches('a[href="#"]')) {
                event.preventDefault();
            }
        });
        /*----------------------------------------------
        5. Transition (À CONSERVER, mais à adapter si nécessaire)
        ----------------------------------------------*/

        window.addEventListener('load', function() {
            // Creating a default timeline
            const tl = gsap.timeline({ // Assurez-vous que gsap est correctement importé/inclus
                defaults: {
                    duration: 1,
                    ease: "power2.out",
                    opacity: 1,
                    transformStyle: "preserve-3d"
                }
            });

            // Timeline Animation
            // Ces sélecteurs (.animate-hero, etc.) doivent correspondre à des éléments *en dehors* de vos composants React.
            // Si vous voulez animer des éléments *à l'intérieur* de vos composants React,
            // vous devez utiliser l'approche useRef + useEffect que je vous ai montrée précédemment.
            tl.fromTo(".animate-hero",
                {
                    opacity: 0,
                    transform: "translate3d(0px, 100px, 0px) skew(0deg, 7deg)"
                },
                {
                    transform: "translate3d(0px, 0px, 0px) skew(0deg, 0deg)"
                }, 0
            )
            .fromTo(".animate-top",
                {
                    opacity: 0,
                    transform: "translate3d(0px, -100px, 0px)"
                },
                {
                    transform: "translate3d(0px, 0px, 0px)"
                }, 0
            )
            .fromTo(".animate-bottom",
                {
                    opacity: 0,
                    transform: "translate3d(0px, 100px, 0px)"
                },
                {
                    transform: "translate3d(0px, 0px, 0px)"
                }, 0
            )
            .fromTo(".animate-line",
                {
                    opacity: 0,
                    transform: "translate3d(0px, 0px, 0px) scale3d(0, 0, 0)"
                },
                {
                    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)"
                }, 0
            )
            .fromTo(".animate-left",
                {
                    opacity: 0,
                    transform: "translate3d(100px, 0px, 0px)"
                },
                {
                    transform: "translate3d(0px, 0px, 0px)"
                }, 0
            )
            .fromTo(".animate-right",
                {
                    opacity: 0,
                    transform: "translate3d(-100px, 0px, 0px)"
                },
                {
                    transform: "translate3d(0px, 0px, 0px)"
                }, 0
            );
        });

    });

}(jQuery));
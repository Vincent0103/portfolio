(()=>{"use strict";var n={199:(n,e,t)=>{t.d(e,{A:()=>y});var o=t(601),a=t.n(o),i=t(314),r=t.n(i),s=t(417),c=t.n(s),l=new URL(t(797),t.b),d=new URL(t(789),t.b),p=new URL(t(917),t.b),m=new URL(t(743),t.b),u=new URL(t(975),t.b),g=r()(a()),h=c()(l),f=c()(d),b=c()(p),v=c()(m),w=c()(u);g.push([n.id,`@font-face {\n  font-family: 'Indivisible';\n  src: url(${h}) format('woff2'),\n       url(${f}) format('woff'),\n       url(${b}) format('eot'),\n       url(${v}) format('ttf');\n}\n\nmain > .loading-screen-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  max-width: none;\n  margin: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  z-index: 100;\n  transition: opacity .5s;\n}\n\n.loading-screen-container > .progressable-container {\n  position: relative;\n  font-family: "Indivisible", "Inter", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  color: transparent;\n  background: no-repeat url(${w});\n  background-color: rgba(255, 255, 255, .2);\n  -webkit-background-clip: text;\n  background-clip: text;\n  background-position-x: -100vw;\n  font-weight: 700;\n  font-size: 30vh;\n  overflow: hidden;\n  user-select: none;\n  transition: transform .2s;\n}\n\n@keyframes slide-out-top {\n  10% {\n    transform: translateY(-10%) rotate(1.5deg);\n  }\n\n  20% {\n    transform: translateY(-9%) rotate(1deg);\n  }\n\n  100% {\n    transform: translateY(-70vh) rotate(5deg);\n  }\n}\n/* This applies styles when the height is greater than the width */\n@media screen and (max-aspect-ratio: 1/1) {\n  .loading-screen-container > .progressable-container {\n    font-size: 30vw;\n  }\n}\n`,""]);const y=g},208:(n,e,t)=>{t.d(e,{A:()=>y});var o=t(601),a=t.n(o),i=t(314),r=t.n(i),s=t(417),c=t.n(s),l=new URL(t(797),t.b),d=new URL(t(789),t.b),p=new URL(t(917),t.b),m=new URL(t(743),t.b),u=new URL(t(168),t.b),g=r()(a()),h=c()(l),f=c()(d),b=c()(p),v=c()(m),w=c()(u);g.push([n.id,`@font-face {\n  font-family: 'Indivisible';\n  src: url(${h}) format('woff2'),\n       url(${f}) format('woff'),\n       url(${b}) format('eot'),\n       url(${v}) format('ttf');\n}\n\n:root {\n  --img-ratio: 0.504;\n  --box-shadow-bgc: 53, 56, 92;\n}\n\n::selection {\n  color: black;\n  background-color: #ffd064;\n}\n\n::-moz-selection {\n  color: black;\n  background-color: #ffd064;\n}\n\nhtml {\n  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  color: white;\n  scroll-behavior: smooth;\n}\n\nh1 {\n  font-size: 5rem;\n}\n\nh2 {\n  font-size: 4.5rem;\n}\n\nh3 {\n  font-size: 2rem;\n  margin: 8px 0;\n}\n\np {\n  font-size: 1.5rem;\n  color: #9e9e9e;\n  font-weight: 300;\n  line-height: 150%;\n}\n\nhr {\n  width: 100%;\n  margin: 0;\n}\n\nbody {\n  max-width: 100vw;\n  overflow-x: hidden;\n  margin: 0;\n  background-color: #020202;\n}\n\nbody.unscrollable {\n  max-height: 100vh;\n  overflow: hidden;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nmain > nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  max-width: 100vw;\n  height: 70px;\n  width: 100vw;\n  margin: 0;\n  background-color: rgba(2, 2, 2, 0.487);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.27);\n  backdrop-filter: blur(10px);\n  z-index: 5;\n}\n\nnav * {\n  margin: 0;\n  }\n\nnav > h3 {\n  color: rgb(208, 208, 208);\n  font-family: "Indivisible", "Inter", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  transform: translateY(-100%);\n  margin-left: 10%;\n  transition: transform .5s ease-out;\n}\n\nnav > .links-container {\n  color: rgb(167, 167, 167);\n  display: flex;\n  gap: 80px;\n  margin-right: 10%;\n}\n\nnav > .links-container h3 {\n  font-weight: 600;\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: transform .2s;\n}\n\nnav > .links-container h3:hover {\n  transform: translateY(-2px);\n}\n\n.banner-heading {\n  display: flex;\n  max-width: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  overflow-x: hidden;\n  margin: 0;\n}\n\n.banner-heading img {\n  max-height: min(140vh, 1500px);\n  user-select: none;\n}\n\nmain > * {\n  max-width: 1500px;\n  margin: 30px 50px;\n}\n\nmain > .about-section {\n  max-width: 100%;\n  margin-top: 0;\n}\n\n.about-section > .p-and-wallpaper-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.about-section .paragraphs-container {\n  position: relative;\n  min-width: 700px;\n  max-width: 1100px;\n  max-height: 300px;\n  overflow: hidden;\n  transition: max-height .5s;\n}\n\n.about-section .paragraphs-container span {\n  background: linear-gradient(to right, #9e9e9e, #ffd064);\n  -webkit-background-clip: text;\n  color: transparent;\n}\n\n.about-section .paragraphs-container a {\n  color: #bb46ff;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.about-section .paragraphs-container a:hover {\n  color: #9639cc;\n  text-decoration: underline;\n}\n\n.about-section .paragraphs-container p:first-child {\n  margin-top: 0;\n}\n\n.about-section .paragraphs-container.after::after {\n  content: "more";\n  cursor: pointer;\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: #d2d2d2;\n  position: absolute;\n  top: 90%;\n  left: 45%;\n  background-image: url(${w});\n  background-repeat: no-repeat;\n  background-position: 65px 6px;\n  padding-right: 35px;\n  z-index: 1;\n}\n\n.about-section .paragraphs-container.before::before {\n  content: "";\n  cursor: pointer;\n  position: absolute;\n  background-image: linear-gradient(to bottom, transparent, #020202 85%);\n  top: 60%;\n  height: 120px;\n  width: 100%;\n}\n\n.about-section .wallpaper-container {\n  min-width: 400px;\n  height: 288px;\n  display: flex;\n  align-items: center;\n}\n\n.about-section .wallpaper-container img {\n  object-fit: cover;\n  width: 100%;\n  min-height: 300px;\n  max-height: 400px;\n}\n\n.animated-h2-container {\n  position: relative;\n  margin: 60px 0;\n}\n\n.about-section > .animated-h2-container {\n  margin-top: 0;\n}\n\n.animated-h2-container > .h2-container {\n  height: 90px;\n  overflow-y: hidden;\n}\n\n.h2-container > h2 {\n  margin: 0;\n}\n\n.spawn-heading-forward {transform: translateY(0);}\n\n.spawn-heading-idle {transform: translateY(20%);}\n\n.spawn-heading {animation: spawn-heading 1s;}\n\n@keyframes spawn-heading {\n  0% {\n    transform: translateY(20%);\n    filter: blur(10px);\n    opacity: 0;\n    }\n\n    80% {\n    transform: translateY(-10%);\n    filter: blur(0);\n    opacity: 1;\n    }\n\n    100% {\n    transform: translateY(0);\n  }\n\n}\n\n.project-title-container {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.project-title {\n  display: inline-block;\n  position: absolute;\n  white-space: nowrap;\n  margin: 60px 0;\n  top: 0;\n  left: 0;\n  transform: translateX(1500px);\n}\n\n.project-title.center {\n  transform: translateX(0);\n  transition: transform .2s;\n}\n\n.project-title.left {\n  transform: translateX(-1500px);\n  transition: transform .2s;\n}\n\n.project-title.moving-left.right {\n  transform: translateX(1500px);\n  transition: none;\n}\n\n.project-title.moving-right.right {\n  transform: translateX(1500px);\n  transition: transform .2s;\n}\n\n.project-title.moving-right.left {\n  transform: translateX(-1500px);\n  transition: none;\n}\n\n.projects-first-title {\n  transition: transform 1s, color 1s;\n}\n\n.projects-first-title.minimize-up {\n  transform: scale(.3) translate(-115%, -180%);\n  color: #676767;\n  transition: transform .2s cubic-bezier(.86,-0.01,.62,1.09), color .2s cubic-bezier(.86,-0.01,.62,1.09);\n}\n\n.current-project-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: auto 1fr;\n  justify-items: start;\n  column-gap: 70px;\n}\n\n\n.img-slider-container {\n  position: relative;\n  min-width: 600px;\n  height: 100%;\n  grid-row: 1/2;\n}\n\n.img-slider-container .sliding-img {\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  transition: transform .2s;\n  user-select: none;\n}\n\n.img-slider-container .sliding-img.carousel-center {\n  position: relative;\n}\n\n.img-slider-container .sliding-img::before {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  transition: opacity .2s;\n}\n\n.sliding-img img {\n  max-width: 100%;\n}\n\n.sliding-img img:nth-of-type(2) {\n  position: absolute;\n  opacity: 0;\n  filter: blur(45px);\n  z-index: -1;\n  transition: opacity .2s;\n}\n\n.carousel-left-left {\n  transform: translateX(-13%) scale(.8);\n  z-index: -3;\n}\n\n.carousel-left-left::before {\n  opacity: .85;\n}\n\n\n.carousel-left {\n  transform: translateX(-7%) scale(.9);\n  z-index: -2;\n}\n\n.carousel-left::before {\n  opacity: .6;\n}\n\n.carousel-center {\n  transform: translateX(0) scale(1);\n  z-index: 0;\n}\n\n.carousel-center::before {\n  opacity: 0;\n}\n\n.carousel-right {\n  transform: translateX(7%) scale(.9);\n  z-index: -2;\n}\n\n.carousel-right::before {\n  opacity: .6;\n}\n\n.carousel-right-right {\n  transform: translateX(13%) scale(.8);\n  z-index: -3;\n}\n\n.carousel-right-right::before {\n  opacity: .85;\n}\n\n.carousel-hide-left {\n  transform: translateX(-19%) scale(.7);\n  opacity: 0;\n}\n\n.carousel-hide-right {\n  transform: translateX(19%) scale(.7);\n  opacity: 0;\n}\n\n.box-shadow-visible > img:nth-of-type(2) {\n  opacity: .5;\n}\n\n.project-date-container {\n  grid-row: 2/3;\n  justify-self: center;\n}\n\n.project-date-container > p {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin: 10px 0;\n  transition: opacity .2s;\n}\n\n.project-date-container > p.hide {\n  position: absolute;\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.project-date-container > p.show {\n  opacity: .8;\n}\n\n.project-related-container {\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-related-container > * {\n  position: relative;\n}\n\n.project-related-container p {\n  transition: opacity .2s;\n  margin: 5px 0;\n}\n\n.project-related-container > .project-btns {\n  display: flex;\n  margin-top: 10px;\n  gap: 15px;\n}\n\n.project-btns > * {\n  background-color: #050505;\n  color: white;\n  font-family: "Indivisible", "Inter", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  border: 1px solid rgb(30, 30, 30);\n  box-sizing: border-box;\n  border-radius: .5rem;\n  font-size: 1.8rem;\n  padding: .75rem 1rem;\n  text-align: center;\n  box-shadow: 0 1px 2px 0 rgba(255, 255, 255, .8);\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  cursor: pointer;\n  user-select: none;\n  transition: background-color .1s;\n}\n\n.project-btns > .preview-btn {\n  background-color: #dab359;\n  color: black;\n  border: 1px solid rgb(149, 123, 61);\n  box-shadow: 0 1px 2px 0 rgba(218, 179, 89, .8);\n}\n\n.project-btns > *:hover {\n  background-color: #0f0f0f;\n}\n\n.project-btns > .preview-btn:hover {\n  background-color: #f1c661;\n}\n\n.hide {\n  position: absolute;\n  top: 50px;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.show {\n  opacity: 1;\n}\n\n.arrows-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.arrows-container > svg {\n  fill: rgba(0, 0, 0, .7);\n  max-width: 10%;\n  min-height: 10%;\n  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));\n  transition: transform .2s;\n}\n\n.grow {\n  transform: scale(1.3);\n}\n\nmain > .contact-section {\n  width: 100%;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n.hr-and-glow-container {\n  position: relative;\n}\n\n.contact-section .email-glow-container {\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  opacity: .7;\n  z-index: -1;\n}\n\n.contact-section .email-glow-container img {\n  width: 100%;\n}\n\n.contact-section > .contact-related-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contact-related-container > h1 {\n  text-align: center;\n  margin: 50px 0;\n  font-family: "Indivisible", "Inter", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-weight: 700;\n  background: linear-gradient(to bottom, #fdf8c6, #c78d3e);\n  -webkit-background-clip: text;\n  color: transparent;\n  z-index: 0;\n  cursor: pointer;\n  user-select: none;\n  animation: growing-up-and-down 15s ease-in-out infinite;\n}\n.contact-related-container > .links-container {\n  display: flex;\n  justify-content: space-evenly;\n  width: 80%;\n}\n\n.links-container > .link-container {\n  display: flex;\n  align-items: center;\n  width: min-content;\n  cursor: pointer;\n  padding-left: 50px;\n  padding-right: 50px;\n  gap: 20px;\n}\n\n.links-container a {\n  text-decoration: none;\n}\n\n.contact-related-container > .links-container svg {\n  fill: white;\n  max-width: 48px;\n  min-height: 48px;\n}\n\n.links-container > .link-container#instagram {\n  justify-self: end;\n}\n\n.copied-pop-up-container {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90px;\n  height: 40px;\n  background-color: rgba(2, 2, 2, 0.7);\n  border-radius: 10%;\n  border: 1px solid rgba(255, 255, 255, 0.27);\n  backdrop-filter: blur(10px);\n}\n\n.copied-pop-up-container > p {\n  margin: 0;\n  color: white;\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n\nfooter {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 100vw;\n  width: 100vw;\n  height: 60px;\n  margin-bottom: 0;\n  background-color: rgb(8, 8, 8);\n  border-top: 1px solid rgb(31, 31, 31);\n}\n\nfooter > p {\n  font-size: initial;\n  margin: 0;\n}\n\n@keyframes growing-up-and-down {\n  0% {\n    transform: scale(1) rotate(0);\n  }\n  12.5% {\n    transform: scale(.95) rotate(1deg);\n  }\n  25% {\n    transform: scale(1) rotate(2deg);\n  }\n  37.5% {\n    transform: scale(.95) rotate(1deg);\n  }\n  50% {\n    transform: scale(1) rotate(0);\n  }\n  62.5% {\n    transform: scale(.95) rotate(-1deg);\n  }\n  75% {\n    transform: scale(1) rotate(-2deg);\n  }\n  87.5% {\n    transform: scale(.95) rotate(-1deg);\n  }\n  100% {\n    transform: scale(1) rotate(0);\n  }\n}\n\n@media screen and (max-width: 1600px) {\n  main > .contact-section {\n    box-sizing: border-box;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  h1 {\n    font-size: 4.5rem;\n  }\n\n  h2 {\n    font-size: 4rem;\n  }\n\n  nav > .links-container {\n    gap: 60px;\n  }\n\n  .about-section .paragraphs-container {\n    min-width: auto;\n  }\n\n  .about-section .wallpaper-container {\n    display: none;\n  }\n\n  .animated-h2-container {\n    margin: 60px 0;\n  }\n\n  .animated-h2-container > .h2-container {\n    height: 70px;\n  }\n\n  .current-project-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .img-slider-container {\n    min-width: auto;\n  }\n\n  .project-date-container {\n    align-self: center;\n  }\n\n  .contact-related-container > .links-container > .link-container {\n    gap: 10px;\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n\n  .contact-related-container > .links-container p {\n    font-size: 1.2rem;\n  }\n\n  .copied-pop-up-container {\n    width: 75px;\n    height: 35px;\n  }\n\n  .copied-pop-up-container > p {\n    font-size: .9rem;\n  }\n\n  footer > p {\n    font-size: .8rem;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  h1 {\n    font-size: 3.5rem;\n  }\n\n  main > nav {\n    height: 60px;\n  }\n\n  nav > h3 {\n    font-size: 1.5rem;\n  }\n\n  nav > .links-container {\n    gap: 40px;\n  }\n\n  nav > .links-container h3 {\n    font-size: 1rem;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  main > * {\n    margin-left: 25px;\n    margin-right: 25px;\n  }\n\n  main > nav {\n    display: none;\n  }\n\n  main > .contact-section {\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n\n  .contact-related-container > h1 {\n    margin-top: 25px;\n    margin-bottom: 25px;\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n\n  h3 {\n    font-size: 1.5rem;\n  }\n\n  .project-btns > * {\n    font-size: 1.3rem;\n    padding: .5rem .75rem;\n  }\n\n  p {\n    font-size: initial;\n  }\n\n  .about-section .paragraphs-container.after::after {\n    font-size: 1.2rem;\n    background-position: 50px 2px;\n    left: 40%;\n  }\n\n  .animated-h2-container {\n    margin: 26.56px 0;\n  }\n\n  .animated-h2-container > .h2-container {\n    height: 40px;\n  }\n\n  .project-title {\n    margin: 26.56px 0;\n  }\n\n  .project-date-container > p {\n    font-size: .8rem;\n  }\n\n  .contact-related-container > .links-container > .link-container {\n    gap: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n\n  .contact-related-container > .links-container p {\n    font-size: .7rem;\n  }\n  .contact-related-container > .links-container svg {\n    max-width: 24px;\n    max-height: 24px;\n  }\n\n  .copied-pop-up-container {\n    width: 55px;\n    height: 25px;\n  }\n\n  .copied-pop-up-container > p {\n    font-size: .7rem;\n  }\n\n  footer {\n    margin-top: 10px;\n    height: 40px;\n  }\n\n  footer > p {\n    font-size: .5rem;\n  }\n}\n\n@media screen and (max-aspect-ratio: 17/10) {\n  .banner-heading img {\n    margin-left: 10%;\n  }\n}\n\n@media screen and (max-aspect-ratio: 31/20) {\n  .banner-heading img {\n    margin-left: 25%;\n  }\n}\n\n@media screen and (max-aspect-ratio: 7/5) {\n  .banner-heading img {\n    margin-left: 40%;\n  }\n}\n@media screen and (max-aspect-ratio: 31/25) {\n  .banner-heading img {\n    margin-left: 55%;\n  }\n}\n\n@media screen and (max-aspect-ratio: 28/25) {\n  .banner-heading img {\n    max-width: 330vw;\n  }\n}\n\n`,""]);const y=g},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},r=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var g=a(u,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:g,references:1})}r.push(p)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=o(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var s=t(i[r]);e[s].references--}for(var c=o(n,a),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},168:n=>{n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgaWQ9ImRvd24iPjxwYXRoIGZpbGw9IiNkMmQyZDIiIGQ9Ik01LjMwNSA4LjMwNmExLjA0NiAxLjA0NiAwIDAgMCAwIDEuNDc4bDUuOTA0IDUuOTFjLjIyOC4yMjguNTM2LjMzLjgzNC4zMDIuMjcgMCAuNTM5LS4xMDEuNzQ0LS4zMDZsNS45MDctNS45MDdhMS4wNDQgMS4wNDQgMCAxIDAtMS40NzctMS40NzdsLTUuMjIgNS4yMi01LjIxNi01LjIyYTEuMDQzIDEuMDQzIDAgMCAwLTEuNDc2IDBaIj48L3BhdGg+PC9zdmc+Cg=="},917:(n,e,t)=>{n.exports=t.p+"images/56a3f1bb21e13fa3a962.eot"},743:(n,e,t)=>{n.exports=t.p+"images/812b4191b6d936772cb7.ttf"},789:(n,e,t)=>{n.exports=t.p+"images/17951b9173fd3ff04052.woff"},797:(n,e,t)=>{n.exports=t.p+"images/4970270df86568f67a77.woff2"},975:(n,e,t)=>{n.exports=t.p+"images/dd0174168fabb9f1fcad.jpg"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),a=t.n(o),i=t(659),r=t.n(i),s=t(56),c=t.n(s),l=t(540),d=t.n(l),p=t(113),m=t.n(p),u=t(199),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=r().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d(),e()(u.A,g),u.A&&u.A.locals&&u.A.locals;var h=t(208),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=r().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(h.A,f),h.A&&h.A.locals&&h.A.locals;const b=n=>"string"!=typeof n?null:n.split("-").map((n=>n[0].toUpperCase()+n.slice(1))).join(" "),v=n=>{const e=n.querySelector(".contact-related-container"),t=e.querySelector("h1"),o={email:!0,discord:!0};let a;const i=(n,t,i,r,s)=>{if(!(i in o))throw Error("bad forSection parameter input");navigator.clipboard.writeText(t).then((()=>{const t=(n=>{const e=Object.entries(o).find((([e,t])=>!t&&e!==n));return e?e[0]:null})(i);t&&((n,t)=>{a&&clearTimeout(a),e.contains(n)&&e.removeChild(n),o[t]=!0})(s,t),o[i]&&(o[i]=!1,r.setPosition(n.pageX,n.pageY),((n,t,i)=>{new Promise((t=>{e.appendChild(n),setTimeout((()=>t()),10)})).then((()=>{t.fadeIn(),a=setTimeout((()=>{((n,t,a)=>{t.fadeOut(),setTimeout((()=>{e.removeChild(n),o[a]=!0}),100)})(n,t,i)}),2e3)}))})(s,r,i))}))};let r;return{handleContactClick:()=>{const n=(()=>{let n=null;return{create:()=>{const e=document.createElement("div");e.classList.add("copied-pop-up-container"),e.style.transform="scale(.9) translate(10%, -100%)",e.style.pointerEvents="none",e.style.transition="opacity .1s, transform .1s";const t=document.createElement("p");return t.textContent="Copied!",e.appendChild(t),n=e,e},setPosition:(e,t)=>{n.style.left=`${e}px`,n.style.top=`${t}px`},fadeIn:()=>{n.style.opacity="1",n.style.transform="scale(1) translate(10%, -100%)"},fadeOut:()=>{n.style.opacity="0",n.style.transform="scale(.9) translate(10%, -100%)"}}})(),o=n.create(),a=t.textContent,s=e.querySelector(".link-container#discord");t.addEventListener("click",(e=>{i(e,a,"email",n,o)})),s.addEventListener("click",(e=>{i(e,"vinctcode","discord",n,o)}));try{r()}catch(n){console.error("resolveContactRelated failed:",n)}},loadingContactRelated:()=>new Promise((n=>{r=n}))}},w=(n,e)=>{const t=n.querySelector(".h2-container"),o=t.querySelector("h2");let a,i;const r=new Promise((n=>{i=n})),s=n=>new Promise((e=>{a=setTimeout(e,n)}));return{add:()=>{const r=new IntersectionObserver((c=>{c.forEach((c=>{c.isIntersecting?(o.classList.add("spawn-heading"),o.classList.remove("spawn-heading-idle"),o.classList.add("spawn-heading-forward"),s(800).then((()=>{t.style.overflowY="visible",o.addEventListener("animationend",(()=>{s(200).then((()=>i()))}))})),e&&r.unobserve(n)):(o.classList.remove("spawn-heading"),o.classList.remove("spawn-heading-forward"),o.classList.add("spawn-heading-idle"),clearTimeout(a),t.style.overflowY="hidden")}))}));r.observe(n)},getResolvingAnimation:()=>r}},y=n=>{const e=n.querySelectorAll(".sliding-img"),t=function(n){const e=n,t=(()=>{let n=null;return{set:e=>{n=e},get:()=>n}})(),o="box-shadow-visible",a=(n,e,a)=>{"carousel-center"===n&&(a?e.classList.remove(o):(e.classList.add(o),t.set(e.id)))};return{initializeCarousel:n=>{e.forEach(((e,t)=>{e.classList.add(n[t]);const o=n[t];a(o,e,!1)}))},moveCarousel:n=>{e.forEach(((e,t)=>{const o=(n=>{const e=n.className.match(/carousel(?:-\w+)+/);return e?e[0]:""})(e);a(o,e,!0),((n,e,t)=>{e!==t&&(n.classList.remove(e),n.classList.add(t))})(e,o,n[t]);const i=n[t];a(i,e,!1)}))},getDisplayedProjectName:t.get}}(e),o=(()=>{const n=(()=>{let n;return{setClassesValue(e){n=[...e]},getClassesValue:()=>[...n]}})();return{getProjectsCarouselClasses:n.getClassesValue,moveCarouselProjectsClasses:e=>{const t=n.getClassesValue();e?t.unshift(t.pop()):t.push(t.shift()),n.setClassesValue(t)},initializeCarouselProjectsClasses:e=>{const t=e;if(t<=0)throw new Error("Cannot initialize with a null or negative length");const o=["carousel-hide-left","carousel-left-left","carousel-left","carousel-center","carousel-right","carousel-right-right","carousel-hide-right"];if(1===t)return n.setClassesValue([o[3]]);const a=[];let i=2,r=t+2;if(t>3&&t<=5)i=1,r=t+1;else if(t>5){let e=5;const i=t-e;let r,s=Math.ceil(i/2),c=i-s;for(let n=0;n<t;n+=1)s>0?(a.push("carousel-hide-left"),s-=1):e>0?(r=5-e+1,a.push(o[r]),e-=1):c>0&&(a.push("carousel-hide-right"),c-=1);return void n.setClassesValue([...a])}for(let n=i;n<r;n+=1)a.push(o[n]);n.setClassesValue([...a])}}})(),a=(()=>{let n="left";return{set:e=>{n=e},get:()=>n}})(),i=(()=>{let n=!1;return{set:e=>{n=e},get:()=>n}})();let r,s,c,l;const d=n=>{s=n.getBoundingClientRect(),c=s.width*(5/6),l=s.width/6};return{initialize:()=>{o.initializeCarouselProjectsClasses(e.length),t.initializeCarousel(o.getProjectsCarouselClasses());try{r()}catch(n){console.error("resolveCarousel failed:",n)}},slide:n=>{o.moveCarouselProjectsClasses(n),t.moveCarousel(o.getProjectsCarouselClasses())},handleCarouselClick:()=>{d(n),window.addEventListener("resize",(()=>d(n))),n.addEventListener("click",function(n,e){let t=0;return function(...e){const o=(new Date).getTime();if(!(o-t<100))return t=o,n(...e)}}((n=>{i.set(!1);const e=n.clientX-s.left,t=e>c;(t||e<l)&&(a.set(t?"left":"right"),i.set(!0))})))},handleCarouselHover:()=>{const[e,t]=n.querySelectorAll("svg#left-arrow, svg#right-arrow");n.addEventListener("mousemove",(n=>{const o=n.clientX-s.left,a=o>c;o<l?e.classList.add("grow"):a?t.classList.add("grow"):(e.classList.remove("grow"),t.classList.remove("grow"))})),n.addEventListener("mouseleave",(()=>{e.classList.remove("grow"),t.classList.remove("grow")}))},getDisplayedProjectName:()=>t.getDisplayedProjectName(),getSlidingSide:a.get,getHasClickedSide:i.get,loadingCarousel:()=>new Promise((n=>{r=n}))}},x=n=>{const e=n,t=document.querySelector("nav"),o=document.querySelector(".about-section"),a=document.querySelector(".projects-section"),i=document.querySelector(".contact-section"),r=a.querySelector(".img-slider-container"),s=a.querySelector(".project-summary-container"),c=a.querySelector(".project-learnt-container"),l=a.querySelector(".project-date-container"),d=a.querySelector(".project-btns > .preview-btn"),p=a.querySelector(".project-btns > .code-btn"),m=(n=>{const e=n,t=(n,e)=>{const{bottom:o}=e.getBoundingClientRect();o-n.clientY<=120&&(e.classList.remove("before","after"),(n=>{const e=document.createElement("p");e.textContent="Two years ago, I committed myself to study computer science as deep as possible by following ";const t=document.createElement("a");t.setAttribute("target","_blank"),t.setAttribute("href","https://www.theodinproject.com/"),t.textContent="The Odin Project",e.appendChild(t);const o=document.createTextNode(" course (which made this portfolio possible ❤︎).");e.appendChild(o);const a=document.createElement("p");a.textContent="During my free time, i most likely program applications, hit the gym, play solo video games and read self-improvement books.",n.append(e,a)})(e),(n=>{const e=n,t=e.scrollHeight;if(navigator?.hardwareConcurrency<4)return e.style.transition="none",void(e.style.maxHeight="none");e.style.maxHeight=`${t}px`,e.addEventListener("transitionend",(()=>{e.style.maxHeight="none"}),{once:!0})})(e),e.removeEventListener("click",t))};let o;return{handleMoreBtnClick:()=>{const n=e.querySelector(".paragraphs-container");n.addEventListener("click",(e=>t(e,n)));try{o()}catch(n){console.error("resolveAboutSection failed: ",n)}},loadingAboutSection:()=>new Promise((n=>{o=n}))}})(o);m.loadingAboutSection().then((()=>e.progress())),m.handleMoreBtnClick();const u=y(r);u.loadingCarousel().then((()=>e.progress())),u.initialize();const g=(n=>{const e={battleship:{summary:"A strategic battleship game played against an A.I where you aim to sink the opponent's ships before they sink yours.",learnt:"Deepening of JavaScript and A.I. Introduction to testing methodologies (unit testing and TDD).",releaseDate:"2024-02-17",preview:"https://vincent0103.github.io/battleship/",code:"https://github.com/Vincent0103/battleship/"},calculator:{summary:"A basic calculator that performs basic arithmetic operations.",learnt:"Object-Oriented Programming (OOP), node.js, arrays, loops, DOM manipulation and events.",releaseDate:"2023-07-14",preview:"https://vincent0103.github.io/calculator/",code:"https://github.com/Vincent0103/calculator/"},restaurantPage:{summary:"A web app providing details about a fictional restaurant, featuring menu, location, and contact sections.",learnt:"Deepening of JavaScript ES6 Modules, classes, webpack. Learning of factory functions and the module pattern.",releaseDate:"2023-08-04",preview:"https://vincent0103.github.io/restaurant-page/",code:"https://github.com/Vincent0103/restaurant-page/"},landingPage:{summary:"Showcases the creation of an attractive, user-friendly website entry point.",learnt:"Introduction to CSS foundations, including inspecting HTML & CSS, block and inline styling, and flexbox.",releaseDate:"2023-06-18",preview:"https://vincent0103.github.io/landing-page/",code:"https://github.com/Vincent0103/landing-page/"},knightTravails:{summary:"An app that finds the shortest path for a knight to travel from point A to B on a chessboard.",learnt:"Introduction to computer science, including recursion, time and space complexity, and the use of common data structures and algorithms.",releaseDate:"2023-10-27",preview:"https://vincent0103.github.io/knights-travails/",code:"https://github.com/Vincent0103/knights-travails/"},ticTacToe:{summary:"A game for two players (or against an A.I) to compete in a classic game of Tic Tac Toe.",learnt:"Javascript best practices (organizing code) including objects and object contructors. To finish off with factory functions and the module pattern.",releaseDate:"2023-07-29",preview:"https://vincent0103.github.io/tic-tac-toe/",code:"https://github.com/Vincent0103/tic-tac-toe/"},todoList:{summary:"An app for effective task management, allowing task creation, reading, and deletion.",learnt:"Deepening of javascript ES6 modules, webpack where i got introduced to JSON aswell as OOP principles.",releaseDate:"2023-08-14",preview:"https://vincent0103.github.io/todo-list/",code:"https://github.com/Vincent0103/todo-list/"},weatherApp:{summary:"A dynamic web application that provides real-time weather information from a location.",learnt:"Linting, including dynamic UI, form validation and a big part about asynchronous JavaScript and APIs.",releaseDate:"2023-10-15",preview:"https://vincent0103.github.io/weather-app/",code:"https://github.com/Vincent0103/weather-app/"},imageSlider:{summary:"An app that allows users to view a series of images in a sequential manner.",learnt:"Deepening of JavaScript by making smart algorithms including web design.",releaseDate:"2023-08-17",preview:"https://vincent0103.github.io/image-slider/",code:"https://github.com/Vincent0103/image-slider/"},adminDashboard:{summary:"An app for efficient data management and visualization as an admin with a flexible, well-structured layout.",learnt:"Introduction to grid (when to use flexbox over grid, ect...) for layout design.",releaseDate:"2023-07-22",preview:"https://vincent0103.github.io/admin-dashboard/",code:"https://github.com/Vincent0103/admin-dashboard/"}};return{update:t=>{const o=[...n],a={0:"summary",1:"learnt",2:"releaseDate",3:"preview",4:"code"},i="string"!=typeof(r=t)?null:r.split("-").map(((n,e)=>0!==e?n.charAt(0).toUpperCase()+n.slice(1):n)).join("");var r;let s,c;o.forEach(((n,t)=>{"a"!==n.tagName.toLowerCase()?(s=n.querySelector("p.show"),c=n.querySelector("p.hide"),s.classList.remove("show"),s.classList.add("hide"),c.textContent=e[i][a[t]],c.classList.remove("hide"),c.classList.add("show")):n.href=e[i][a[t]]}))},loadingProjectRelated:()=>new Promise((n=>{n()}))}})([s,c,l,d,p]);g.loadingProjectRelated().then((()=>e.progress()));const h=v(i);h.loadingContactRelated().then((()=>e.progress())),h.handleContactClick(),(n=>({handleLinkClick:()=>{n.querySelectorAll(".links-container *").forEach((n=>{n.addEventListener("click",(()=>{const e=n.getAttribute("data-target"),t=document.getElementById(e).getBoundingClientRect(),o=window.scrollY+t.top-100;window.scrollTo({top:o,behavior:"smooth"})}))}))}}))(t).handleLinkClick();const[f,x,k]=document.querySelectorAll(".animated-h2-container");w(f,!1).add(),w(k,!1).add();const C=w(x,!0);C.add();const j=(n=>{const e=[...n.querySelectorAll(".project-title")];return{initialize:async(e,t)=>{await e.then((async()=>{(n=>{const e=n;e.classList.remove("spawn-heading"),e.classList.add("minimize-up"),setTimeout((()=>{e.textContent="Project:"}),160)})(n.querySelector(".projects-first-title"));const e=n.querySelector(".project-title.right");await((n,e)=>{const t=n;return t.classList.remove("right"),t.textContent=b(e),t.classList.add("center"),new Promise((n=>{t.addEventListener("transitionend",(()=>{n()}),{once:!0})}))})(e,t)}))},update:(n,t,o)=>{if(n===t)return;const a=b(t);((n,e,t)=>{const o=["left","center","right"],a=[],i={getNextIndex:(n,e,t)=>{let o;return o=n?(e-1+t.length)%t.length:(e+1)%t.length,o},extractPositionClass:n=>{const e=n.className.match(/\s((left)|(center)|(right))/);return e?e[0].trimStart():""}};n.forEach((n=>{const r=n,s=i.extractPositionClass(r);r.classList.remove(s),((n,e)=>{const t=n?"moving-left":"moving-right",o=n?"moving-right":"moving-left";e.classList.contains(t)||(e.classList.add(t),e.classList.remove(o))})(e,r),(e&&"right"===s||"left"===s)&&(r.textContent=t);const c=o.indexOf(s),l=i.getNextIndex(e,c,o);a.push(o[l])})),n.forEach(((n,e)=>n.classList.add(a[e])))})(e,o,a)}}})(a.querySelector(".project-title-container"));let S=u.getDisplayedProjectName();j.initialize(C.getResolvingAnimation(),S).then((()=>{let n;u.handleCarouselClick(),u.handleCarouselHover();let e=null;const t=()=>{n=u.getSlidingSide(),u.slide("left"===n),S=u.getDisplayedProjectName(),g.update(S),j.update(e,S,"left"===n),e=S};let o=setInterval(t,1e4);r.addEventListener("click",(()=>{clearInterval(o),u.getHasClickedSide()&&t(),o=setInterval(t,1e4)}))}))};let k;window.addEventListener("DOMContentLoaded",(()=>{const n=(n=>{const e=n.querySelector(".progressable-container"),t=document.querySelector("nav > h3"),o=[],a=(()=>{let n=-1;return{get:()=>n,increment:()=>{n+=1}}})(),i=[.15,.35,.45,.65,1],r=()=>{o.length=0,i.forEach((n=>{const t=e.offsetWidth;o.push(t*(n-1))}))},s=(()=>{let n=!1;return{get:()=>n,set:e=>{n=e}}})(),c=()=>{s.set(!0),setTimeout((()=>{e.style.background="none",e.style.backgroundColor="none",e.style.backgroundClip="unset",e.style.color="white",e.style.animation="slide-out-top 2s forwards ease-in";const o=()=>{const a=n;document.body.classList.remove("unscrollable"),a.style.opacity="0",t.style.transform="translateY(0)",window.scrollTo(0,0),setTimeout((()=>a.remove()),300),e.removeEventListener("animationend",o)};e.addEventListener("animationend",o)}),500)};return{initialize:()=>{e.style.backgroundSize=`${e.offsetWidth}px 100vh`,e.style.backgroundPositionX=`-${e.offsetWidth}px`,e.style.transition="background-position .2s, transform .2s",r(),window.addEventListener("resize",(()=>{r();const n=e.offsetWidth,t=a.get(),o=n*(i[t]-1);e.style.backgroundSize=`${n}px 100vh`,e.style.backgroundPositionX=`${o}px`})),setTimeout((()=>{s.get()||c()}),15e3)},progress:()=>{e.style.backgroundPositionX=`${o.shift()}px`,a.increment(),o.length||s.get()||c()}}})(document.querySelector(".loading-screen-container"));k=n,n.initialize(),x(k)})),window.onload=()=>{k&&k.progress()}})()})();
import React, { useRef, useEffect  } from "react";
import { useIntersection } from "react-use";
import back from "./left.svg";
import send from "./send.svg";
import img from "./asset/img1.jpg";
import {TweenMax} from 'gsap';
import gsap from "gsap";
import simpleParallax from 'simple-parallax-js';
import "./App.scss";

const App = () => {

  let alara = useRef(null);
  let text = useRef(null);
  let image = useRef(null);
  let bottom = useRef(null);
  let rev = useRef(null);
  let images = useRef(null);


  
  useEffect(() => {

   
    new simpleParallax(images);


    TweenMax.to(rev, 1, {
      delay: 1,
      opacity: 1,
      ease: "power4.out"
    });

    TweenMax.to(image, 1.5, {
      delay: 1.5,
      opacity: 1,
      ease: "power4.out"
    });

    TweenMax.to(alara, 1, {
      delay: 2,
      opacity: 1,
      ease: "power4.out"
    });

    TweenMax.to(text, 1.5, {
      delay: 2.5,
      opacity: 1,
      ease: "power4.out"
    });

    TweenMax.to(bottom, 1.5, {
      delay: 3,
      opacity: 1,
      ease: "power4.out"
    });
  });


   // Ref for our element intersection
   const sectionRef = useRef(null);

   // All the ref to be observed
   const intersection = useIntersection(sectionRef, {
     root: null,
     rootMargin: "0px",
     threshold: 0.2
   });
 
   // Animation for fading in
   const fadeIn = element => {
     gsap.to(element, 1, {
       opacity: 1,
       y: -60,
       ease: "power4.out",
       stagger: {
         amount: 0.3
       }
     });
   };
   // Animation for fading out
   const fadeOut = element => {
     gsap.to(element, 1, {
       opacity: 0,
       y: -20,
       ease: "power4.out"
     });
   };
 
   // checking to see when the vieport is visible to the user
   intersection && intersection.intersectionRatio < 0.2
     ? fadeOut(".fadeIn")
     : fadeIn(".fadeIn");


  return (
    <>
      <div ref={el => { rev = el }} className='header'>
        <div className='sm-btn'>
          <img src={back} alt='back arrow' />
        </div>
        <h5>About</h5>
        <div className='sm-btn'>
          <img src={send} alt='' />
        </div>
      </div>
      <div className='sectionFirst'>
        <div ref={el => { image = el }}  className='pic'>
          <img ref={el => { images = el }} 
            src={img}
            alt=''
          />
        </div>
        <h3 ref={el => { alara = el }}  >Alara Frank</h3>
        <p ref={el => { text = el }} >
          Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit.
          Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et
          tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
         consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique.
          Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio
          tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas
          pretium.
        </p>
      </div>
      <div ref={el => { bottom = el }} className='sectionSecond'>
        <div ref={sectionRef} className='inner'>
          <h3 className='fadeIn'>The talk of what makes a champion.</h3>
          <p className='fadeIn'>
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna
            sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam
            sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet
            nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut
            tristique. Egestas diam in arcu cursus euismod quis viverra nibh.
            Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu
            turpis egestas pretium. Tortor vitae purus faucibus ornare
            suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim
            diam quis enim lobortis. Enim sit amet venenatis urna cursus eget.
            Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et
            ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non
            arcu risus quis. Lectus sit amet est placerat in egestas erat
            imperdiet. Cum sociis natoque penatibus et magnis dis.
          </p>
          <div className='btn-row fadeIn'>
            <a href='/'>Click here bruh</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

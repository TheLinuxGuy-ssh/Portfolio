import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from 'aos';

const scroll = new LocomotiveScroll({
  lenisOptions: {
    orientation: 'vertical',
    lerp: 0.1,
    wheelMultiplier: 1,
  },
});


class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = [
  'Linux Enthusiast',
  'Server Admin',
  'Web Developer',
  'Designer',
  'Programmer',
  'Typewhiz'
];


const el = document.querySelector('.hero-desc');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

next();


gsap.registerPlugin(ScrollTrigger);


let breakPoint = 800;
let mm = gsap.matchMedia();

mm.add({
  isDesktop: `(min-width: ${breakPoint}px)`, // <- when ANY of these are true, the function below gets invoked
  isMobile: `(max-width: ${breakPoint - 1}px)`
}, (context) => {

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      scrub: 1,
      end: "150%",
      start: "top center"
    },

    smoothChildTiming: true
  });
  gsap.set(".revolutionising", { x: '-20%' });  // Set initial position for element1
  gsap.set(".server", { x: '40%' });  // Set initial position for element2


  tl.to(".revolutionising", {
    x: '50%'
  }).to(".server", {
    x: '-30%'
  }, 0);

  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      scrub: 1,
      end: "200%",
      start: "top bottom"
    },
    smoothChildTiming: true
  });

  gsap.set(".bg", { y: '-40%' });  // Set initial position for element1
  t2.to(".bg", {
    y: '7.5%'
  });

  const t0 = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      scrub: 1,
      end: "100%",
      start: "center"
    },

    smoothChildTiming: true
  });



  const t00 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-real",
      scrub: 1,
      end: "10vh",
      start: "top bottom"
    },

    smoothChildTiming: true
  });

  const logo = document.getElementById("logo");

  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

  window.addEventListener("scroll", () => {
    const scrollPercentage = window.scrollY / totalHeight;
    const rotation = scrollPercentage * 360;
    gsap.to(logo, { rotation: rotation });
  });

  return () => console.log("cleanup");
});


document.addEventListener("DOMContentLoaded", () => {

  const navItems = document.querySelectorAll('.nav-item');

  const toggleSiblingClass = (items, index, offset, className, add) => {
    const sibling = items[index + offset];
    if (sibling) {
      sibling.classList.toggle(className, add);
    }
  };
  // Event listeners to toggle classes on hover
  navItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('hover'); // Add .hover to current item
      toggleSiblingClass(navItems, index, -1, 'sibling-close', true); // Previous sibling
      toggleSiblingClass(navItems, index, 1, 'sibling-close', true);  // Next sibling
      toggleSiblingClass(navItems, index, -2, 'sibling-far', true);   // Previous-previous sibling
      toggleSiblingClass(navItems, index, 2, 'sibling-far', true);    // Next-next sibling
    });
    item.addEventListener('mouseleave', () => {
      item.classList.remove('hover'); // Remove .hover from current item
      toggleSiblingClass(navItems, index, -1, 'sibling-close', false); // Previous sibling
      toggleSiblingClass(navItems, index, 1, 'sibling-close', false);  // Next sibling
      toggleSiblingClass(navItems, index, -2, 'sibling-far', false);   // Previous-previous sibling
      toggleSiblingClass(navItems, index, 2, 'sibling-far', false);    // Next-next sibling
    });
  });
});
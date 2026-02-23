

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  const answer = faq.querySelector(".answer");

  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      // CLOSE
      answer.style.maxHeight = answer.scrollHeight + "px"; // set current height
      requestAnimationFrame(() => {
        answer.style.maxHeight = "0px";
      });
      faq.classList.remove("active");
    } else {
      // OPEN
      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").slice(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach(section => observer.observe(section));




const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  {
    threshold: 0.15, // 15% visible triggers animation
  }
);

revealElements.forEach(el => revealObserver.observe(el));
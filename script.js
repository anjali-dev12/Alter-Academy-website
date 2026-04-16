const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-q");

  question.addEventListener("click", () => {

    faqItems.forEach(el => {
      if (el !== item) {
        el.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});
const skillbar = () => {
  const skillBars = document.querySelectorAll(".skill");

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const fill = skillBar.querySelector(".skill-bar__fill");
        const percentage = skillBar.querySelector(".skill-percent");
        const progress = parseInt(fill.getAttribute("data-progress"), 10);

        // Анимация полоски
        fill.style.width = `${progress}%`;

        // Счётчик процентов
        let counter = 0;
        const interval = setInterval(() => {
          if (counter <= progress) {
            percentage.textContent = `${counter}%`;
            counter++;
          } else {
            clearInterval(interval);
          }
        }, 1500 / progress);

        observer.unobserve(skillBar); // Запускается только один раз
      }
    });
  }, observerOptions);

  skillBars.forEach((skillBar) => {
    observer.observe(skillBar);
  });
};

export default skillbar;
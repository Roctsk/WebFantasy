document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll('.image-container');
  
    imageContainers.forEach(container => {
      const img = container.querySelector('img');
      const content = container.querySelector('.content');
      const button = content.querySelector('button');
      const clised = content.querySelector('.clised');

      container.addEventListener('mouseenter', () => {
        img.style.opacity = 0.7;

        clised.style.opacity = 0;

        button.style.transform = 'scale(1.1)';

      });
  
      container.addEventListener('mouseleave', () => {
        img.style.opacity = 1;

        clised.style.opacity = 1;

        button.style.transform = 'scale(1)';

      });
    });
  });
  
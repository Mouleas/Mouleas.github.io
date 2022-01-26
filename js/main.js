const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      const tng = entry.target.querySelector('.scroll-left')
      if (entry.isIntersecting) {
        tng.classList.add('animate-container');
        return;
      }
      tng.classList.remove('animate-container');

    });
});
observer1.observe(document.querySelector('#whoiam'));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      const tng = entry.target.querySelector('.scroll-left')
      if (entry.isIntersecting) {
        tng.classList.add('animate-container');
        return;
      }
      tng.classList.remove('animate-container');

    });
});

observer2.observe(document.querySelector('#things-learnt'));
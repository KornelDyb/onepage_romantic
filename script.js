document.addEventListener('DOMContentLoaded', function() {
  // ===== Karuzela =====
  const items = document.querySelectorAll('.carousel-item');
  const nextBtn = document.querySelector('.carousel-control.next');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const carouselInner = document.querySelector('.carousel-inner');
  let currentIndex = 0;

  function showItem(index) {
    // Przesuwamy karuzelę w poziomie
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    
    // Przełączamy klasę 'active' dla odpowiedniego slajdu
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  });

  // Ustawienie początkowego slajdu
  showItem(currentIndex);

  // ===== Serduszka =====
  const heartsContainer = document.getElementById('hearts-container');

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '♥';

    // Rozmiar
    const size = Math.random() * 20 + 20;
    heart.style.fontSize = size + 'px';

    // Pozycja
    heart.style.left = Math.random() * 100 + 'vw';

    // Czas trwania animacji
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + 's';

    heartsContainer.appendChild(heart);

    // Usunięcie po zakończeniu animacji
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }

  // Początkowy "burst" serduszek
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
  // Kolejne co 1.5s
  setInterval(createHeart, 1500);

  // ===== Dynamiczna zmiana tekstu w #message p =====
  const messageP = document.querySelector('#message p');

  // Tutaj przechowujemy teksty (bez serwera, bez fetch)
  const messages = [
    "Spotkaliśmy się w klubie, tam zaiskrzyło w nas. ✨",
    "Choć nie wiedzieliśmy wtedy, co wyniknie z tego raz. 💫",
    "Pierwsze spotkania pełne wątpliwości i strach, 🚶‍♂️",
    "Ale z każdą chwilą czułem, że idziemy w dobry szlak. 🔥",
    "Pisaliśmy do siebie, każdy dzień to był znak. 💬",
    "Że warto sprawdzić, dokąd zaprowadzi nas ten szlak. 🔑",
    "Próbowaliśmy nowych rzeczy, małych chwil, 🎢",
    "Z Tobą każdy dzień to jak nowy, piękny film. 🎬🌟",
    "Każdy dzień z Tobą to po prostu purrfekcja kicia i wiesz, że jestem w Tobie zainteresowany. 🐈"
  ];

  let msgIndex = 0;

  function changeMessage() {
    // fade-out
    messageP.classList.add('fade-out');

    setTimeout(() => {
      // Zmiana indeksu na kolejny
      msgIndex = (msgIndex + 1) % messages.length;
      // Podstawienie nowego tekstu
      messageP.textContent = messages[msgIndex];

      // Usunięcie fade-out, dodanie fade-in
      messageP.classList.remove('fade-out');
      messageP.classList.add('fade-in');

      // Po krótkiej chwili usuwamy fade-in, żeby dało się ponownie go dodać w przyszłości
      setTimeout(() => {
        messageP.classList.remove('fade-in');
      }, 500);

    }, 500); // 0.5s = czas fade-out
  }

  // Co 4 sekund zmieniamy tekst
  setInterval(changeMessage, 4000);
});

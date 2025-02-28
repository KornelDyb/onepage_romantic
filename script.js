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
    "Każdy dzień z Tobą to po prostu purrfekcja.🐈 ",
    "Czuję, że każdy moment z Tobą to dopiero początek czegoś ciekawego. 🤔",
    "Twoja energia sprawia, że dzień nabiera zupełnie nowego wymiaru. ⚡",
    "Z Tobą każda rozmowa to nowa przygoda, czekam na kolejne. 🗣️",
    "Masz taki sposób bycia, że wszystko staje się po prostu... fajniejsze. 😊",
    "Z każdym spotkaniem coraz bardziej mam wrażenie, że to dopiero początek. ⏳",
    "Czuję, że nasze rozmowy to świetny sposób na poznanie siebie. 🤝",
    "Nie wiem, dokąd to zaprowadzi, ale z Tobą na pewno będzie ciekawie. 🛤️",
    "Z Tobą każdy dzień staje się pełen małych niespodzianek. 🎁",
    "Jest coś w Twoim spojrzeniu, co sprawia, że trudno się oderwać. 👀",
    "To, co mówisz, sprawia, że zaczynam patrzeć na świat inaczej. 🌍",
    "Z Tobą łatwo się rozmawia, a każdy moment ma coś nieoczywistego. 🗨️",
    "Zauważyłem, że z Tobą czas po prostu szybciej leci. ⏰",
    "Nie wiem, dokąd to zaprowadzi, ale czuję, że warto. 🔮",
    "Twój sposób bycia sprawia, że naprawdę chce się poznać Cię lepiej. 💬",
    "Z Tobą czuję, że nawet codzienne rzeczy stają się ciekawe. 🌱",
    "Czuję, że z Tobą mogę odkrywać rzeczy, o których wcześniej nie myślałem. 💡",
    "Każde spotkanie z Tobą to mała tajemnica, którą chce się odkrywać. 🔍",
    "Wydajesz się być osobą, z którą nie można się nudzić. 🎲",
    "Z Tobą każda minuta ma swój charakter, nie ma miejsca na nudę. 🕒",
    "Zaczynam zauważać, że z Tobą wszystko wydaje się prostsze. ✨"
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

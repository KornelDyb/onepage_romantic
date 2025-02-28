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
    "Mam dla Ciebie historię, którą muszę Ci opowiedzieć… o tym, jak to się zaczęło. 📖",
    "Pozwól, że Ci opowiem, jak się spotkaliśmy – to coś, co na pewno zapamiętam na długo. 💭",
    "Poznaliśmy się w klubie, tamtej nocy coś między nami zaiskrzyło, choć jeszcze nie wiedzieliśmy, co z tego wyniknie. ✨",
    "Po tamtej nocy zaczęliśmy się spotykać, spędzać czas w miejscach, gdzie łatwiej było poczuć, kim naprawdę jesteśmy. 🌙",
    "Na początku wszystko było pełne emocji i niepewności, nie wiedzieliśmy, dokąd to zaprowadzi. 🤷‍♂️🤷‍♀️",
    "Zaczęliśmy pisać do siebie, co sprawiło, że poznawanie siebie nabrało zupełnie innego wymiaru. 💬",
    "Zaczęliśmy próbować nowych rzeczy, spędzać czas na spontanicznych przygodach. 🏞️",
    "Widziałem, że czasem się zagubiałaś, ale to tylko sprawiało, że stawaliśmy się dla siebie coraz bardziej otwarci. 🌿",
    "Choć nadal pojawiały się momenty niepewności, z każdym kolejnym spotkaniem stawaliśmy się sobie coraz bliżsi. 🔗",
    "Zaczęliśmy spędzać więcej czasu razem, zauważając, że stajemy się kimś więcej niż tylko znajomymi. 💑",
    "Z każdym dniem wszystko stawało się coraz bardziej naturalne, jakbyśmy znali się od zawsze. 🌸",
    "Teraz czuję, że chcemy doświadczać nowych rzeczy razem. Czekamy na to, co przed nami. 🚀",
    "Czuję, że mamy przed sobą jeszcze mnóstwo wspólnych przygód. ⏳",
    "Z każdym nowym doświadczeniem, nasze serca biją w tym samym rytmie, pełnym ekscytacji. 💓",
    "Zaczynamy patrzeć na siebie i wiem, że każda chwila z Tobą to coś wyjątkowego. ✨",
    "Chcemy spróbować wszystkiego razem – każdy moment to nowa okazja do wspólnych wspomnień. 🌍",
    "To już nie tylko o poznawaniu, to o tworzeniu czegoś, co rośnie między nami, czegoś, co staje się naturalne. 🌟",
    "Wiemy, że to, co mamy, jest czymś wyjątkowym – mamy siebie i czas na wspólne doświadczenia. 🚀",
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
  setInterval(changeMessage, 5000);
});

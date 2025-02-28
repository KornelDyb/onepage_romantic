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
  const messages =[
    "Każdy dzień z Tobą to po prostu purrfekcja.🐈 ",
    "Twoja energia sprawia, że wszystko staje się lepsze. ⚡",
    "Każdy moment przy Tobie to prawdziwa przygoda. 🚀",
    "Jesteś moim tajnym składnikiem szczęścia. 🥰",
    "Z Tobą każdy dzień to mały cud. 🌸",
    "Twoja obecność zamienia szarość w kolor. 🌈",
    "Każda minuta z Tobą to zastrzyk energii. 💥",
    "Z Tobą nawet deszczowe dni nabierają blasku. ☔",
    "Twoje słowa brzmią jak magiczne zaklęcia. 🔮",
    "Każdy moment z Tobą to prawdziwy hit. 🎤",
    "Jesteś moim małym, wielkim szczęściem. 🌟",
    "Twoje uśmiechy to najjaśniejsza część dnia. 😁",
    "Każda chwila przy Tobie to niespodzianka pełna radości. 🎁",
    "Jesteś magicznym eliksirem poprawiającym każdy nastrój. 🍹",
    "Z Tobą każda minuta pełna jest kolorów i śmiechu. 🌺",
    "Twoja obecność to mój codzienny cud. 🌠",
    "Każdy dzień z Tobą to wesoła karuzela emocji. 🎡",
    "Jesteś tajnym źródłem mojej niekończącej się inspiracji. 💡",
    "Z Tobą każdy moment to przygoda, którą chcę przeżywać na nowo. 🗺",
    "Każdy dzień przy Tobie to niezapomniany festyn. 🎪",
    "Z Tobą życie to gra, w której zawsze wygrywam. 🎮",
    "Każdy moment z Tobą brzmi jak koncert serca. 🎻",
    "Z Tobą każda chwila to małe arcydzieło. 🎨",
    "Każdy dzień przy Tobie niesie nowe, niespodziewane szczęście. 🎁",
    "Z Tobą życie smakuje jak najlepszy deser. 🍨",
    "Każda chwila z Tobą to powiew świeżości. 🍃",
    "Jesteś kolorowym motylem przynoszącym radość. 🦋",
    "Z Tobą każdy dzień to magiczna podróż. 🚀",
    "Każdy moment przy Tobie to pstryknięcie czarodziejskiej różdżki. 🪄",
    "Jesteś sekretnym składnikiem szczęścia, którego nie da się podrobić. 🥇",
    "Z Tobą każda sekunda smakuje jak kawałek nieba. ☁️",
    "Każdy dzień z Tobą to nieskończona przygoda pełna uśmiechów. 😄",
    "Jesteś bajkowym eliksirem zamieniającym zwykłe chwile w magię. 🍀",
    "Twoje ciepło sprawia, że każdy dzień staje się słoneczny. 🌞",
    "Jesteś pędzlem malującym moje dni najpiękniejszymi kolorami. 🖌",
    "Z Tobą każdy dzień to taniec radości. 💃",
    "Każda chwila przy Tobie to najpiękniejsza melodia. 🎶",
    "Jesteś magicznym kluczem do szczęścia. 🔑",
    "Z Tobą życie to festiwal nieskończonej radości. 🎊",
    "Każdy dzień z Tobą to niezapomniana przygoda i mnóstwo uśmiechów. 😃",
    "Jesteś bajkowym skarbem, którego szukałem przez całe życie. 💎",
    "Twoja obecność sprawia, że życie smakuje jeszcze lepiej. 🍫",
    "Każdy moment przy Tobie to niezapomniane przeżycie. 🌟",
    "Z Tobą każdy dzień to eksplozja radości i emocji. 💥",
    "Twoja obecność rozgrzewa serce niczym najcieplejsze słońce. 🌞",
    "Każdy moment z Tobą to najlepszy prezent losu. 🎁",
    "Z Tobą życie zamienia się w bajkową podróż pełną niespodzianek. 🚀",
    "Twoje ciepło to mój azyl w każdy burzowy dzień. ⛈",
    "Każdy dzień z Tobą to po prostu czysta magia i urok. ✨",
    "Z Tobą każdy dzień to zmysłowa przygoda, która rozpala emocje. 🔥",
    "Twoja energia to koktajl, który podkręca każdy mój dzień. 🍹",
    "Z Tobą życie smakuje jak wykwintny, lekko pikantny deser. 🍰",
    "Każdy dotyk Twojej dłoni rozświetla moje serce iskrami ekstazy. ✨",
    "Twoje słowa rozpalają moje zmysły niczym iskra zapalająca ogień. 🔥",
    "Z Tobą życie to zmysłowy taniec, który nigdy się nie kończy. 💃",
    "Twoja obecność sprawia, że każdy dzień pachnie przygodą. 🌹",
    "Każdy moment przy Tobie to iskra, która rozgrzewa emocje. 💥",
    "Twoja energia rozświetla mój świat, niczym gwiazdy na nocnym niebie. ⭐",
    "Z Tobą każdy dzień to niespodziewana dawka wrażeń. 🎁",
    "Każda chwila przy Tobie smakuje jak słodko-pikantna uczta dla duszy. 🍮",
    "Twoje ciepło ogrzewa nawet w najchłodniejsze dni. ❄️",
    "Każdy dzień z Tobą to wyprawa w krainę nowych doznań. 🚀",
    "Z Tobą każda chwila jest jak pikantna nuta w melodii życia. 🎵",
    "Twoja obecność zamienia każdy dzień w ekscytującą podróż. 🌡",
    "Każdy moment z Tobą to gorąca iskra, która rozpala emocje. 🔥",
    "Z Tobą życie to ekstaza, której nie da się opisać słowami. 🎇"
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

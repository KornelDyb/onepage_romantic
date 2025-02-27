document.addEventListener('DOMContentLoaded', function() {
    // Obsługa karuzeli
    const items = document.querySelectorAll('.carousel-item');
    const nextBtn = document.querySelector('.carousel-control.next');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const carouselInner = document.querySelector('.carousel-inner');
    let currentIndex = 0;
  
    // Funkcja, która zmienia aktywność slajdu
    function showItem(index) {
      // Przesuwamy karuzelę w poziomie, bazując na indeksie
      carouselInner.style.transform = `translateX(-${index * 100}%)`;  // 100% szerokości slajdu
      
      // Zmieniamy klasę 'active' dla odpowiedniego slajdu
      items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
    }
  
    // Kliknięcie na przycisk "next" (przejście do następnego slajdu)
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length; // Przechodzimy do następnego zdjęcia
      showItem(currentIndex); // Wywołanie funkcji do zmiany slajdu
    });
  
    // Kliknięcie na przycisk "prev" (przejście do poprzedniego slajdu)
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length; // Przechodzimy do poprzedniego zdjęcia
      showItem(currentIndex); // Wywołanie funkcji do zmiany slajdu
    });
  
    showItem(currentIndex); // Ustawienie początkowego slajdu
  
    // Animacja serduszek
    const heartsContainer = document.getElementById('hearts-container');
  
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = '♥';
  
      // Losowy rozmiar serduszka (20px do 40px)
      const size = Math.random() * 20 + 20;
      heart.style.fontSize = size + 'px';
  
      // Losowa pozycja pozioma
      heart.style.left = Math.random() * 100 + 'vw';
  
      // Losowy czas trwania animacji (4-7 sekund)
      const duration = Math.random() * 3 + 4;
      heart.style.animationDuration = duration + 's';
  
      heartsContainer.appendChild(heart);
  
      // Usunięcie serduszka po zakończeniu animacji
      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    }
  
    // Początkowy "burst" serduszek – tworzymy np. 20 serduszek na starcie
    for (let i = 0; i < 20; i++) {
      createHeart();
    }
  
    // Następnie tworzenie serduszek co 1500ms
    setInterval(createHeart, 1500);
  });
  
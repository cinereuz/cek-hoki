function cekHoki() {
  const name = document.getElementById('name').value;
  if (name) {
    const hoki = Math.floor(Math.random() * 101);
    const resultElement = document.getElementById('result');
    const emojiElement = document.getElementById('emoji');
    const imageElement = document.getElementById('image');
    const inputSection = document.getElementById('inputSection');
    const inspiredByElement = document.getElementById('inspiredBy'); // Tambahkan ini

    let hokiText;
    let emoji;
    let flyClass = '';
    let imageUrl = '';

    if (hoki > 80) {
      hokiText = 'Hoki Abiessszzz!';
      emoji = '😲🎉🥶🤩';
      flyClass = 'fly';
      imageUrl = 'hokiabies.png';
      colorClass = 'color-green';
    } else if (hoki > 50) {
      hokiText = 'Lagi Hoki!';
      emoji = '😊😁';
      imageUrl = 'hoki.jpeg';
      colorClass = 'color-blue';
    } else if (hoki > 20) {
      hokiText = 'Kurang Hoki!';
      emoji = '😐';
      imageUrl = 'kuranghoki.jpeg';
      colorClass = 'color-yellow';
    } else {
      hokiText = 'Sial Banget!';
      emoji = '😢🤕🤡';
      imageUrl = 'sial.jpeg';
      colorClass = 'color-red';
    }

    resultElement.innerHTML = `${name}, Kamu Hari Ini <span class="${colorClass}">${hokiText}</span>`;
    emojiElement.innerText = emoji;

    if (flyClass) {
      emojiElement.classList.add(flyClass);
      setTimeout(() => {
        emojiElement.classList.remove(flyClass);
      }, 2000);
    }

    if (imageUrl) {
      imageElement.innerHTML = `<img src="${imageUrl}" alt="${hokiText}" style="width: 200px; height: auto;" />`;
    } else {
      imageElement.innerHTML = '';
    }

    inputSection.style.display = 'none';
    inspiredByElement.style.display = 'none'; // Tambahkan ini untuk menyembunyikan tulisan "Inspired by Cek Khodam Website"

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Cek Lagi';
    resetButton.onclick = () => resetForm();
    resultElement.appendChild(resetButton);
  } else {
    document.getElementById('result').innerText = 'Nama Kamu Siapa?';
  }
}

function resetForm() {
  const inputSection = document.getElementById('inputSection');
  const resultElement = document.getElementById('result');
  const emojiElement = document.getElementById('emoji');
  const imageElement = document.getElementById('image');
  const inspiredByElement = document.getElementById('inspiredBy'); // Tambahkan ini

  resultElement.innerText = '';
  emojiElement.innerText = '';
  imageElement.innerHTML = '';
  inspiredByElement.style.display = 'block'; // Tambahkan ini untuk menampilkan kembali tulisan "Inspired by Cek Khodam Website"

  const resetButton = resultElement.querySelector('button');
  if (resetButton) {
    resetButton.remove();
  }

  inputSection.style.display = 'block';
}

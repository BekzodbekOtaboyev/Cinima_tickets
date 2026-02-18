let jamiOrindiq =40;
  let narx = 1000;
  let orindiqlarDiv = document.getElementById('orindiqlar');
  let soniSpan = document.getElementById('soni');
  let jamiSpan = document.getElementById('jami');

  for (let i = 1; i <= jamiOrindiq; i++) {
    let orindiq = document.createElement('div');
    orindiq.classList.add('seat');
    orindiq.textContent = i;

    orindiq.onclick = function () {
      if (orindiq.classList.contains('booked')) return;
      orindiq.classList.toggle('selected');
      hisobla();
    };

    orindiqlarDiv.appendChild(orindiq);
  }

  function hisobla() {
    let tanlangan = document.querySelectorAll('.seat.selected');
    soniSpan.textContent = tanlangan.length;
    jamiSpan.textContent = tanlangan.length * narx;
  }

  function tolash() {
    let tanlangan = document.querySelectorAll('.seat.selected');

    tanlangan.forEach(seat => {
      seat.classList.remove('selected');
      seat.classList.add('booked');
      seat.textContent = 'X';
    });

    
  }
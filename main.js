const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

// メニューを開く
openBtn.addEventListener('click', () => {
  document.body.classList.add('menu-open');
});

// メニューを閉じる
closeBtn.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
});
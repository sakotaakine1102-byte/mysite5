"use strict";

{
  const open = document.getElementById('open');  // menu
  const close = document.getElementById('close'); // ×ボタン
  const overlay = document.getElementById('overlay'); // メニュー本体

  // menu
  open.addEventListener('click', () => {
    document.body.classList.add('menu-open');
  });

  // ×ボタン
  close.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });

  // (オプション) メニュー内のリンクを押したら閉じるようにする
  const navLinks = document.querySelectorAll('.sp-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
    });
  });
}
const menuData = {
  drinks: [
    ["エチオピア イルガチェフェ", "ジャスミンとベルガモットを思わせる繊細な香り。浅煎り。", "¥ 1,200"],
    ["ダージリン ファーストフラッシュ", "春摘みの最高峰。マスカテルフレーバーが広がる上品な一杯。", "¥ 1,400"],
    ["グアテマラ アンティグア", "チョコレートとナッツの余韻。中深煎りのシングルオリジン。", "¥ 1,100"],
    ["白茶 白毫銀針", "中国福建省産。蜂蜜のような甘みと繊細な香り。", "¥ 1,600"],
  ],
  food: [
    ["クロワッサン ブール", "AOP認証バターを使用。外はパリッと、中はもっちり。", "¥ 680"],
    ["アールグレイのシフォンケーキ", "ベルガモットの香りを纏った軽やかなシフォン。", "¥ 780"],
    ["季節のフルーツタルト", "国産果実をふんだんに使用したサブレタルト。", "¥ 900"],
    ["フィナンシェ プレーン", "ノワゼットバターとアーモンドの定番フランス菓子。", "¥ 420"],
  ],
};

const galleryData = [
  ["assets/gallery-tea.jpg", "テーブルの上の紅茶とケーキ"],
  ["assets/gallery-cup.jpg", "白いコーヒーカップ"],
  ["assets/gallery-latte.jpg", "カプチーノのラテアート"],
  ["assets/gallery-cappuccino.jpg", "木のテーブルのカプチーノ"],
  ["assets/gallery-croissant.jpg", "トレーの上のクロワッサン"],
  ["assets/gallery-bread.jpg", "マグカップとパン"],
];

const renderMenuCard = ([name, description, price]) => `
  <article class="menu-card">
    <div><h3>${name}</h3><p>${description}</p></div>
    <p class="price">${price}</p>
  </article>`;

document.querySelectorAll("[data-menu]").forEach((menu) => {
  menu.innerHTML = menuData[menu.dataset.menu].map(renderMenuCard).join("");
});

const gallery = document.querySelector("[data-gallery]");
if (gallery) {
  gallery.innerHTML = galleryData.map(([src, alt]) => `<img src="${src}" alt="${alt}" loading="lazy" />`).join("");
}

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const reserveButton = document.querySelector("[data-reserve]");

const closeNav = () => {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) closeNav();
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
});

reserveButton?.addEventListener("click", () => {
  alert("Lesson11の練習用ページです。実案件では予約フォームや外部予約サービスへ接続します。");
});

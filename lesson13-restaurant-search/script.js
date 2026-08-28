const scenes=[
  {name:'記念日・\n特別な夜',key:'anniversary',img:'assets/scene-anniversary.jpg',count:342},
  {name:'家族旅行・\n子連れ',key:'family',img:'assets/scene-family.jpg',count:186},
  {name:'ひとり旅',key:'solo',img:'assets/scene-solo.jpg',count:128},
  {name:'友人・\nグループ',key:'group',img:'assets/scene-group.jpg',count:214}
];
const restaurants=[
  {name:'山の宿 花水木',meta:'★ 4.8 · 京都市',img:'assets/stay-mountain.jpg'},
  {name:'旬彩 つきじ',meta:'★ 4.8 · 京都市',img:'assets/gourmet.jpg'},
  {name:'宿 嵐山庵',meta:'★ 4.8 · 京都市',img:'assets/scene-search.jpg'}
];
const voices=[
  ['記念日旅行','「記念日」シーンで検索したら、雰囲気が合う宿と近くの料亭がセットで提案されて感動しました。','田中 あゆみ','35歳・東京都・会社員','assets/avatar.jpg'],
  ['家族旅行','子ども向けメニューがある施設だけに絞れて助かりました。食事選びの時間が半分以下になりました。','佐藤 健太','42歳・神奈川県・自営業','assets/scene-family.jpg'],
  ['ひとり旅','ひとり客歓迎の宿と小料理屋をまとめて探せるのが本当に助かります。','山田 さくら','28歳・大阪府・デザイナー','assets/scene-solo.jpg'],
  ['友人グループ','宿と食事の候補をみんなに共有でき、幹事の自分が一番楽でした。','鈴木 博','51歳・愛知県・会社員','assets/scene-group.jpg'],
  ['記念日旅行','以前は何時間も比較していましたが、1時間以内に宿も食事も決まりました。','中村 美香','33歳・福岡県・看護師','assets/scene-anniversary.jpg'],
  ['ひとり旅','旅行者目線でセレクトされた店ばかりで、普通のグルメサイトとは違います。','小林 剛','38歳・千葉県・エンジニア','assets/avatar.jpg']
];
const faqs=['トキナルは無料で使えますか？','退会はいつでもできますか？','掲載されている施設数・エリアは？','宿泊施設の予約もトキナルからできますか？','スマートフォンでも使えますか？'];

const sceneGrid=document.querySelector('#sceneGrid');
scenes.forEach((s,i)=>{const card=document.createElement('button');card.className=`scene-card ${i===0?'active':''}`;card.innerHTML=`<img src="${s.img}" alt=""><div><strong>${s.name}</strong>${i===0?'<small>✓ 選択中</small>':''}</div>`;card.addEventListener('click',()=>{document.querySelectorAll('.scene-card').forEach(c=>c.classList.remove('active'));card.classList.add('active');document.querySelector('#resultCount').textContent=`${s.count}件`;document.querySelector('.result-label').textContent=`「${s.name.replace('\n','')}」の宿と旅グルメ`;});sceneGrid.appendChild(card)});
restaurants.forEach(r=>{const card=document.createElement('article');card.className='restaurant-card';card.innerHTML=`<img src="${r.img}" alt="${r.name}"><div><h3>${r.name}</h3><p>${r.meta}</p></div>`;document.querySelector('#restaurantGrid').appendChild(card)});
voices.forEach(v=>{const card=document.createElement('article');card.className='voice-card';card.innerHTML=`<div class="stars">★★★★★</div><small>${v[0]}</small><p>${v[1]}</p><footer><img src="${v[4]}" alt=""><span>${v[2]}<br>${v[3]}</span></footer>`;document.querySelector('#voiceGrid').appendChild(card)});
faqs.forEach(q=>{const item=document.createElement('div');item.className='faq-item';item.innerHTML=`<button class="faq-q">${q}<span>＋</span></button><div class="faq-a">はい、基本機能は無料で利用できます。詳しい条件は登録後のヘルプをご確認ください。</div>`;item.querySelector('.faq-q').addEventListener('click',()=>{item.classList.toggle('open');item.querySelector('.faq-q span').textContent=item.classList.contains('open')?'−':'＋'});document.querySelector('#faqList').appendChild(item)});
document.querySelector('.menu-toggle').addEventListener('click',e=>{const nav=document.querySelector('.global-nav');const open=nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
document.querySelector('#signupForm').addEventListener('submit',e=>{e.preventDefault();alert('登録フォームのデモです。実案件では送信先APIを接続します。')});
const chatForm=document.querySelector('#chatForm');
chatForm.addEventListener('submit',e=>{e.preventDefault();const input=document.querySelector('#chatInput');const value=input.value.trim();if(!value)return;const messages=document.querySelector('#chatMessages');messages.insertAdjacentHTML('beforeend',`<p class="chat-bubble user">${value.replace(/[<>]/g,'')}</p><p class="chat-bubble bot">ありがとうございます。条件に合う宿と旅グルメを探しています。<br>「${value.replace(/[<>]/g,'')}」に近い候補を検索画面でご確認ください。</p>`);input.value='';messages.scrollTop=messages.scrollHeight});

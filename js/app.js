// ─── STATE ───
const state = {
  currency: { code:'MYR', symbol:'RM', rate:1 },
  lang: 'EN',
  cart: [],
  wishlist: new Set(),
  slideIndex: 0,
  slidePaused: false,
  slideInterval: null,
  slideTimer: 0,
  loggedIn: false,
  user: null
};

// ─── PRODUCT DATA ───
const PRODUCTS = [
  { id:1, brand:'IZYLIONS', name:'AeroRun Pro Long-Sleeve', price:189, oldPrice:249, tag:'sale', colors:['#0a0a0a','#e8382d','#1a3a5c'], imgs:['black','crimson','navy'], sizes:['XS','S','M','L','XL','XXL'], category:'men', sport:'running' },
  { id:2, brand:'IZYLIONS', name:'Femme PowerFlex Sports Bra', price:119, oldPrice:null, tag:'new', colors:['#2d1a2e','#0a0a2e','#e8382d'], imgs:['purple','midnight','red'], sizes:['XS','S','M','L','XL'], category:'women', sport:'yoga' },
  { id:3, brand:'IZYLIONS', name:'Court King Basketball Jersey', price:149, oldPrice:null, tag:'hot', colors:['#0a0a0a','#fff','#1a3a5c'], imgs:['black','white','blue'], sizes:['S','M','L','XL','XXL'], category:'men', sport:'basketball' },
  { id:4, brand:'IZYLIONS', name:'FlexCore Training Shorts', price:89, oldPrice:129, tag:'sale', colors:['#2d2d2d','#1a3a5c','#1a4a1a'], imgs:['charcoal','navy','forest'], sizes:['S','M','L','XL'], category:'men', sport:'training' },
  { id:5, brand:'IZYLIONS', name:'ZenFlow Yoga Leggings', price:159, oldPrice:null, tag:'new', colors:['#0a0a0a','#3d1a5c','#e8382d'], imgs:['black','plum','red'], sizes:['XS','S','M','L','XL'], category:'women', sport:'yoga' },
  { id:6, brand:'IZYLIONS', name:'TrailBlazer Windbreaker', price:299, oldPrice:399, tag:'sale', colors:['#2d1a00','#0a2d0a','#0a0a0a'], imgs:['orange','green','black'], sizes:['S','M','L','XL','XXL'], category:'men', sport:'outdoor' },
  { id:7, brand:'IZYLIONS', name:'Junior Sprint Tee Set', price:79, oldPrice:null, tag:'new', colors:['#e8382d','#1a3a5c','#2d8a2d'], imgs:['red','blue','green'], sizes:['4Y','6Y','8Y','10Y','12Y'], category:'kids', sport:'training' },
  { id:8, brand:'IZYLIONS', name:'HyperDry Running Vest', price:129, oldPrice:169, tag:'sale', colors:['#0a0a0a','#e8382d','#f5a623'], imgs:['black','red','amber'], sizes:['XS','S','M','L','XL'], category:'women', sport:'running' },
];

// Gradient backgrounds for product cards (replaces real images)
const GRADIENTS = [
  'linear-gradient(145deg,#1a1a2e,#16213e)',
  'linear-gradient(145deg,#2d1b2e,#561b2e)',
  'linear-gradient(145deg,#1a2d1a,#0f3d1a)',
  'linear-gradient(145deg,#2e2000,#5c3d00)',
  'linear-gradient(145deg,#0a001a,#1a0040)',
  'linear-gradient(145deg,#001a2d,#003d6e)',
  'linear-gradient(145deg,#1a0000,#3d0000)',
  'linear-gradient(145deg,#0a0a0a,#2d2d2d)',
];

// ─── FORMAT PRICE ───
function fmt(rmPrice) {
  const { symbol, rate, code } = state.currency;
  const val = rmPrice * rate;
  if(code==='KRW'||code==='IDR'||code==='JPY') return symbol + Math.round(val).toLocaleString();
  return symbol + val.toFixed(2);
}

// ─── RENDER PRODUCTS ───
function renderProducts(container, items) {
  container.innerHTML = items.map((p,i) => {
    const isWished = state.wishlist.has(p.id);
    const discount = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : 0;
    const colorDots = p.colors.map((c,ci)=>`<div class="color-dot${ci===0?' active':''}" style="background:${c}" onclick="event.stopPropagation()"></div>`).join('');
    const sizeChips = p.sizes.map((s,si)=>`<div class="size-chip${si===0?' active':''}" onclick="event.stopPropagation();this.parentNode.querySelectorAll('.size-chip').forEach(x=>x.classList.remove('active'));this.classList.add('active')">${s}</div>`).join('');
    const imgSlides = [0,1,2].map(idx=>`<div style="min-width:100%;height:100%;background:${GRADIENTS[(i+idx)%GRADIENTS.length]};display:flex;align-items:center;justify-content:center;"><span style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:rgba(255,255,255,0.2);text-align:center;padding:1rem;">${p.name}</span></div>`).join('');
    const imgDots = [0,1,2].map(idx=>`<button class="product-img-dot${idx===0?' active':''}" onclick="event.stopPropagation();slideProductImg(this,${idx})"></button>`).join('');
    const tagHTML = p.tag==='sale'?`<span class="tag tag-sale">−${discount}%</span>`:p.tag==='new'?`<span class="tag tag-new">NEW</span>`:p.tag==='hot'?`<span class="tag tag-hot">🔥 HOT</span>`:'';
    return `
    <div class="product-card" onclick="addToCart(${p.id})">
      <div class="product-img-wrap">
        <div class="product-imgs" id="pi-${p.id}">${imgSlides}</div>
        <div class="product-tags">${tagHTML}</div>
        <button class="wishlist-btn${isWished?' active':''}" id="wb-${p.id}" onclick="event.stopPropagation();toggleWishlist(${p.id})" title="Add to Wishlist">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWished?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <div class="product-img-dots">${imgDots}</div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-colors">${colorDots}</div>
        <div class="product-sizes">${sizeChips}</div>
        <div class="product-price">
          <span class="price">${fmt(p.price)}</span>
          ${p.oldPrice?`<span class="price-old">${fmt(p.oldPrice)}</span><span class="price-save">Save ${discount}%</span>`:''}
        </div>
        <button class="add-cart-btn" onclick="event.stopPropagation();addToCart(${p.id})">Add to Bag</button>
      </div>
    </div>`;
  }).join('');
}

function slideProductImg(dotEl, idx) {
  const dotsWrap = dotEl.parentNode;
  const card = dotsWrap.closest('.product-card');
  const imgs = card.querySelector('.product-imgs');
  imgs.style.transform = `translateX(-${idx*100}%)`;
  dotsWrap.querySelectorAll('.product-img-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
}

// ─── CART ───
function addToCart(productId) {
  const p = PRODUCTS.find(x=>x.id===productId);
  if(!p) return;
  const existing = state.cart.find(x=>x.id===productId);
  if(existing) existing.qty++;
  else state.cart.push({...p, qty:1, selectedSize:p.sizes[0]});
  updateCartUI();
  showToast(`✓ ${p.name} added to bag`);
  if(!document.getElementById('cart-sidebar').classList.contains('open')) toggleCart();
}

function updateCartUI() {
  const total = state.cart.reduce((a,x)=>a+x.qty,0);
  document.getElementById('cart-badge').textContent = total;
  const list = document.getElementById('cart-items-list');
  const footer = document.getElementById('cart-footer');
  if(state.cart.length === 0) {
    list.innerHTML = `<div class="cart-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gray-200)" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><p>Your bag is empty.</p></div>`;
    footer.style.display='none';
    return;
  }
  footer.style.display='block';
  list.innerHTML = state.cart.map(item=>`
    <div class="cart-item">
      <div style="width:80px;height:100px;border-radius:2px;flex-shrink:0;background:${GRADIENTS[item.id%GRADIENTS.length]};display:flex;align-items:center;justify-content:center;">
        <span style="font-family:'Bebas Neue',sans-serif;font-size:12px;color:rgba(255,255,255,0.4);text-align:center;padding:4px;">${item.name.split(' ').slice(0,2).join(' ')}</span>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.brand} · Size: ${item.selectedSize}</div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          </div>
          <button class="cart-remove" onclick="removeFromCart(${item.id})">✕</button>
          <span class="cart-item-price">${fmt(item.price * item.qty)}</span>
        </div>
      </div>
    </div>`).join('');
  const subtotal = state.cart.reduce((a,x)=>a+x.price*x.qty,0);
  document.getElementById('cart-subtotal').textContent = fmt(subtotal);
  document.getElementById('checkout-total').textContent = fmt(subtotal * 1.06);
  updateCheckoutUI();
}

function changeQty(id, delta) {
  const item = state.cart.find(x=>x.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) removeFromCart(id);
  else updateCartUI();
}
function removeFromCart(id) {
  state.cart = state.cart.filter(x=>x.id!==id);
  updateCartUI();
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.classList.toggle('open');
  overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
}

// ─── WISHLIST ───
function toggleWishlist(id) {
  if(state.wishlist.has(id)) {
    state.wishlist.delete(id);
    showToast('Removed from wishlist');
  } else {
    state.wishlist.add(id);
    const p = PRODUCTS.find(x=>x.id===id);
    showToast(`♡ ${p.name} saved to wishlist`);
  }
  // Update button
  const btn = document.getElementById(`wb-${id}`);
  if(btn) {
    btn.classList.toggle('active', state.wishlist.has(id));
    const svg = btn.querySelector('svg');
    if(svg) svg.setAttribute('fill', state.wishlist.has(id)?'currentColor':'none');
  }
  updateWishlistUI();
}

function updateWishlistUI() {
  const count = state.wishlist.size;
  const badge = document.getElementById('wishlist-badge');
  badge.style.display = count > 0 ? 'flex' : 'none';
  badge.textContent = count;
  document.getElementById('wishlist-count').textContent = `(${count} item${count!==1?'s':''})`;
  const grid = document.getElementById('wishlist-grid');
  const items = PRODUCTS.filter(p=>state.wishlist.has(p.id));
  if(items.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--gray-400);"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" style="margin-bottom:1rem;display:block;margin-left:auto;margin-right:auto;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>Your wishlist is empty.</div>`;
  } else {
    renderProducts(grid, items);
  }
}

// ─── CHECKOUT ───
function updateCheckoutUI() {
  const items = document.getElementById('checkout-items');
  items.innerHTML = state.cart.map(item=>`
    <div class="checkout-summary-item">
      <div class="checkout-item-img" style="background:${GRADIENTS[item.id%GRADIENTS.length]};position:relative;">
        <span class="checkout-item-qty">${item.qty}</span>
      </div>
      <div class="checkout-item-name">${item.name}<br><span style="font-size:11px;color:var(--gray-400);">${item.brand} · ${item.selectedSize}</span></div>
      <div class="checkout-item-price">${fmt(item.price*item.qty)}</div>
    </div>`).join('');
  const sub = state.cart.reduce((a,x)=>a+x.price*x.qty,0);
  const tax = sub * 0.06;
  document.getElementById('co-subtotal').textContent = fmt(sub);
  document.getElementById('co-tax').textContent = fmt(tax);
  document.getElementById('co-total').textContent = fmt(sub+tax);
}

function openCheckout() {
  document.getElementById('checkout-page').classList.add('open');
  if(document.getElementById('cart-sidebar').classList.contains('open')) toggleCart();
  updateCheckoutUI();
}
function closeCheckout() {
  document.getElementById('checkout-page').classList.remove('open');
}

function handlePlaceOrder() {
  showToast('✓ Order placed! Check your email for confirmation.');
  state.cart = [];
  updateCartUI();
  setTimeout(()=>{ document.getElementById('checkout-page').classList.remove('open'); },1500);
}

function setPayMethod(method) {
  ['card','fpx','ewallet'].forEach(m=>{
    document.getElementById(`pm-${m}`).style.borderBottomColor = m===method?'var(--black)':'transparent';
    document.getElementById(`pm-${m}`).style.color = m===method?'var(--black)':'var(--gray-400)';
    document.getElementById(`pm-${m}`).style.background = m===method?'var(--white)':'var(--gray-100)';
    document.getElementById(`payment-${m}-form`).style.display = m===method?'block':'none';
  });
}

// ─── SLIDESHOW ───
const SLIDE_DURATION = 5000;
function initSlides() {
  const dots = document.getElementById('slide-dots');
  const slides = document.querySelectorAll('.slide');
  slides.forEach((_,i)=>{
    const dot = document.createElement('div');
    dot.className='slide-dot'+(i===0?' active':'');
    dot.onclick=()=>goToSlide(i);
    dots.appendChild(dot);
  });
  startSlideTimer();
}

function goToSlide(idx) {
  document.querySelectorAll('.slide').forEach((s,i)=>s.classList.toggle('active',i===idx));
  document.querySelectorAll('.slide-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
  state.slideIndex = idx;
  state.slideTimer = 0;
}
function nextSlide() {
  const n = document.querySelectorAll('.slide').length;
  goToSlide((state.slideIndex+1)%n);
}
function prevSlide() {
  const n = document.querySelectorAll('.slide').length;
  goToSlide((state.slideIndex-1+n)%n);
}
function startSlideTimer() {
  if(state.slideInterval) clearInterval(state.slideInterval);
  state.slideTimer = 0;
  const step = 50;
  state.slideInterval = setInterval(()=>{
    if(state.slidePaused) return;
    state.slideTimer += step;
    const pct = (state.slideTimer/SLIDE_DURATION)*100;
    document.getElementById('progress-bar').style.width = pct+'%';
    if(state.slideTimer >= SLIDE_DURATION) { nextSlide(); document.getElementById('progress-bar').style.width='0%'; }
  },step);
}
function togglePause() {
  state.slidePaused = !state.slidePaused;
  const icon = document.getElementById('pause-icon');
  icon.innerHTML = state.slidePaused
    ? '<polygon points="5,3 19,12 5,21"/>'
    : '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
}

// ─── MODALS ───
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow='';
}
function closeModalIfOverlay(e,id){if(e.target===e.currentTarget)closeModal(id);}
function openPage(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow='hidden';
}
function closePage(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow='';
}
function switchTab(tab) {
  document.getElementById('tab-login').classList.toggle('active',tab==='login');
  document.getElementById('tab-register').classList.toggle('active',tab==='register');
  document.getElementById('login-form').style.display = tab==='login'?'block':'none';
  document.getElementById('register-form').style.display = tab==='register'?'block':'none';
}

function handleLogin() {
  state.loggedIn = true;
  closeModal('login-modal');
  showToast('✓ Welcome back to IZYLIONS!');
}
function handleRegister() {
  state.loggedIn = true;
  closeModal('login-modal');
  showToast('✓ Account created! Welcome to IZYLIONS!');
}

// ─── SEARCH ───
const SEARCH_CATALOG = ['Running Tee','Basketball Shorts','Yoga Leggings','Sports Bra','Windbreaker','Compression Tights','Track Pants','Hoodies','Training Shoes','Swimming Trunks','Tennis Skirt','Football Jersey','Hiking Pants','Cycling Shorts'];
function handleSearch(val) {
  const live = document.getElementById('live-suggestions');
  const suggestions = document.getElementById('search-suggestions');
  if(!val.trim()) { live.innerHTML=''; return; }
  const matches = SEARCH_CATALOG.filter(x=>x.toLowerCase().includes(val.toLowerCase())).slice(0,4);
  live.innerHTML = matches.map(m=>`<div class="suggestion-item" onclick="doSearch('${m}')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>${m}</div>`).join('');
}
function doSearch(term) {
  document.getElementById('search-input').value = term;
  document.getElementById('search-suggestions').classList.remove('open');
  showToast(`🔍 Searching for "${term}"...`);
}
document.addEventListener('click', e=>{
  if(!e.target.closest('.search-wrap')) {
    document.getElementById('search-suggestions').classList.remove('open');
  }
  if(!e.target.closest('[onclick*="toggleDropdown"]')) {
    document.querySelectorAll('.dropdown-panel').forEach(d=>d.classList.remove('open'));
  }
});

// ─── CURRENCY & LANGUAGE ───
function toggleDropdown(id) {
  const el = document.getElementById(id);
  const wasOpen = el.classList.contains('open');
  document.querySelectorAll('.dropdown-panel').forEach(d=>d.classList.remove('open'));
  if(!wasOpen) el.classList.add('open');
}
function setCurr(code, symbol, rate) {
  state.currency = {code,symbol,rate};
  document.getElementById('curr-label').textContent = `${code} ${symbol}`;
  document.querySelectorAll('.dropdown-panel').forEach(d=>d.classList.remove('open'));
  renderProducts(document.getElementById('products-grid'), PRODUCTS);
  updateCartUI();
  showToast(`Currency changed to ${code}`);
}
function setLang(label, code) {
  state.lang = label;
  document.getElementById('lang-label').textContent = label;
  document.querySelectorAll('.dropdown-panel').forEach(d=>d.classList.remove('open'));
  showToast(`Language changed`);
}

// ─── TOAST ───
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  if(toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'),2800);
}

// ─── NAVBAR SCROLL ───
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>10);
});

// ─── INIT ───
document.addEventListener('DOMContentLoaded',()=>{
  renderProducts(document.getElementById('products-grid'), PRODUCTS);
  initSlides();
  updateWishlistUI();
});

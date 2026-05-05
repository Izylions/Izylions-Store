<!-- ─── TOP BAR ─── -->
<div id="topbar">
  <div class="marquee-wrap">
    <div class="marquee">
      <span>🚚 Free shipping on orders above RM 299</span>
      <span>🎉 NEW ARRIVALS: SS25 Collection is live</span>
      <span>💳 0% instalment plan available</span>
      <span>🏆 Malaysia's #1 Athletic Wear Brand — IZYLIONS</span>
      <span>🚚 Free shipping on orders above RM 299</span>
      <span>🎉 NEW ARRIVALS: SS25 Collection is live</span>
      <span>💳 0% instalment plan available</span>
      <span>🏆 Malaysia's #1 Athletic Wear Brand — IZYLIONS</span>
    </div>
  </div>
  <div class="topbar-right">
    <!-- Language -->
    <div style="position:relative;">
      <button class="lang-btn" onclick="toggleDropdown('lang-dd')">
        🌐 <span id="lang-label">EN</span> ▾
      </button>
      <div class="dropdown-panel" id="lang-dd">
        <div class="dropdown-panel a" style="padding:6px 14px;font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:0.08em;text-transform:uppercase;">Language</div>
        <a href="#" onclick="setLang('EN','en');return false;"><span class="flag">🇲🇾</span> English (MY)</a>
        <a href="#" onclick="setLang('EN','en');return false;"><span class="flag">🇺🇸</span> English (US)</a>
        <a href="#" onclick="setLang('中文','zh');return false;"><span class="flag">🇨🇳</span> 简体中文</a>
        <a href="#" onclick="setLang('한국어','ko');return false;"><span class="flag">🇰🇷</span> 한국어</a>
        <a href="#" onclick="setLang('日本語','ja');return false;"><span class="flag">🇯🇵</span> 日本語</a>
        <a href="#" onclick="setLang('BH','id');return false;"><span class="flag">🇮🇩</span> Bahasa Indonesia</a>
        <a href="#" onclick="setLang('ภาษา','th');return false;"><span class="flag">🇹🇭</span> ภาษาไทย</a>
        <a href="#" onclick="setLang('SG','en-sg');return false;"><span class="flag">🇸🇬</span> English (SG)</a>
      </div>
    </div>
    <!-- Currency -->
    <div style="position:relative;">
      <button class="currency-btn" onclick="toggleDropdown('curr-dd')">
        <span id="curr-label">MYR RM</span> ▾
      </button>
      <div class="dropdown-panel" id="curr-dd">
        <div style="padding:6px 14px;font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:0.08em;text-transform:uppercase;">Currency</div>
        <a href="#" onclick="setCurr('MYR','RM',1);return false;"><span class="flag">🇲🇾</span> MYR — Ringgit</a>
        <a href="#" onclick="setCurr('USD','$',0.22);return false;"><span class="flag">🇺🇸</span> USD — Dollar</a>
        <a href="#" onclick="setCurr('SGD','S$',0.30);return false;"><span class="flag">🇸🇬</span> SGD — Dollar</a>
        <a href="#" onclick="setCurr('CNY','¥',1.59);return false;"><span class="flag">🇨🇳</span> CNY — Yuan</a>
        <a href="#" onclick="setCurr('KRW','₩',296);return false;"><span class="flag">🇰🇷</span> KRW — Won</a>
        <a href="#" onclick="setCurr('IDR','Rp',3430);return false;"><span class="flag">🇮🇩</span> IDR — Rupiah</a>
        <a href="#" onclick="setCurr('JPY','¥',33);return false;"><span class="flag">🇯🇵</span> JPY — Yen</a>
        <a href="#" onclick="setCurr('THB','฿',7.9);return false;"><span class="flag">🇹🇭</span> THB — Baht</a>
      </div>
    </div>
    <button class="lang-btn" onclick="openModal('login-modal')">Sign In</button>
  </div>
</div>

<!-- ─── NAVBAR ─── -->
<nav id="navbar">
  <a href="#" class="logo">IZYLIONS<span>.</span></a>

  <div class="nav-links">
    <!-- Men -->
    <div class="nav-item">
      <a href="#">Men</a>
      <div class="mega-menu">
        <div class="mega-col">
          <h4>By Type</h4>
          <a href="#" class="bold">New Arrivals</a>
          <a href="#">T-Shirts & Tops</a>
          <a href="#">Hoodies & Sweatshirts</a>
          <a href="#">Jackets & Outerwear</a>
          <a href="#">Shorts</a>
          <a href="#">Track Pants</a>
          <a href="#">Joggers</a>
          <a href="#">Underwear & Socks</a>
          <a href="#">Compression Wear</a>
        </div>
        <div class="mega-col">
          <h4>By Sport</h4>
          <a href="#">Running</a>
          <a href="#">Basketball</a>
          <a href="#">Football</a>
          <a href="#">Training & Gym</a>
          <a href="#">Tennis</a>
          <a href="#">Swimming</a>
          <a href="#">Hiking & Trail</a>
          <a href="#">Yoga & Pilates</a>
        </div>
        <div class="mega-col">
          <h4>Collections</h4>
          <a href="#" class="bold" style="color:var(--accent)">🔥 On Sale</a>
          <a href="#">Summer 2025</a>
          <a href="#">Classic Edition</a>
          <a href="#">Limited Drop</a>
          <a href="#">Collaborations</a>
        </div>
        <div class="mega-featured">
          <div style="background:linear-gradient(135deg,#0a0a0a,#333);height:120px;display:flex;align-items:center;justify-content:center;">
            <span style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:white;">NEW DROP</span>
          </div>
          <div class="mega-featured-label">
            Men's SS25
            <div class="mega-featured-sub">From RM 99</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Women -->
    <div class="nav-item">
      <a href="#">Women</a>
      <div class="mega-menu">
        <div class="mega-col">
          <h4>By Type</h4>
          <a href="#" class="bold">New Arrivals</a>
          <a href="#">Sports Bras</a>
          <a href="#">Leggings & Tights</a>
          <a href="#">T-Shirts & Tops</a>
          <a href="#">Hoodies & Sweatshirts</a>
          <a href="#">Skirts & Dresses</a>
          <a href="#">Shorts</a>
          <a href="#">Jackets</a>
        </div>
        <div class="mega-col">
          <h4>By Sport</h4>
          <a href="#">Running</a>
          <a href="#">Yoga & Pilates</a>
          <a href="#">Training & Gym</a>
          <a href="#">Tennis</a>
          <a href="#">Dance</a>
          <a href="#">Swimming</a>
          <a href="#">Hiking</a>
        </div>
        <div class="mega-col">
          <h4>Collections</h4>
          <a href="#" class="bold" style="color:var(--accent)">🔥 On Sale</a>
          <a href="#">Femme Power Series</a>
          <a href="#">Maternity Active</a>
          <a href="#">Plus Size</a>
          <a href="#">Loungewear</a>
        </div>
        <div class="mega-featured">
          <div style="background:linear-gradient(135deg,#8B1A1A,#c4281e);height:120px;display:flex;align-items:center;justify-content:center;">
            <span style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:white;">FEMME SS25</span>
          </div>
          <div class="mega-featured-label">
            Women's Collection
            <div class="mega-featured-sub">From RM 89</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Kids -->
    <div class="nav-item">
      <a href="#">Kids</a>
      <div class="mega-menu">
        <div class="mega-col">
          <h4>Age Group</h4>
          <a href="#">Baby (0–24M)</a>
          <a href="#">Toddler (2–4Y)</a>
          <a href="#">Little Kids (4–7Y)</a>
          <a href="#">Big Kids (7–15Y)</a>
        </div>
        <div class="mega-col">
          <h4>By Type</h4>
          <a href="#">T-Shirts</a>
          <a href="#">Shorts & Pants</a>
          <a href="#">Hoodies</a>
          <a href="#">Sets & Kits</a>
          <a href="#">School Uniforms</a>
        </div>
      </div>
    </div>
    <!-- Sale -->
    <div class="nav-item">
      <a href="#" style="color:var(--accent);">Sale</a>
      <div class="mega-menu">
        <div class="mega-col">
          <h4>Men's Sale</h4>
          <a href="#">Up to 70% off Tops</a>
          <a href="#">Bottoms from RM 49</a>
          <a href="#">Clearance Jackets</a>
        </div>
        <div class="mega-col">
          <h4>Women's Sale</h4>
          <a href="#">Sports Bras from RM 39</a>
          <a href="#">Leggings Deals</a>
          <a href="#">Bundle & Save</a>
        </div>
        <div class="mega-col">
          <h4>Last Chance</h4>
          <a href="#" class="bold" style="color:var(--accent)">Final Sale Items</a>
          <a href="#">Outlet Sizes</a>
        </div>
      </div>
    </div>
    <!-- About -->
    <div class="nav-item">
      <a href="#" onclick="openPage('about-page');return false;">About</a>
    </div>
    <!-- Contact -->
    <div class="nav-item">
      <a href="#" onclick="openPage('contact-page');return false;">Contact</a>
    </div>
  </div>

  <!-- Search -->
  <div class="search-wrap">
    <input type="text" id="search-input" placeholder="Search styles, brands..." autocomplete="off"
      oninput="handleSearch(this.value)"
      onfocus="document.getElementById('search-suggestions').classList.add('open')"
    />
    <span class="search-icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    </span>
    <div class="search-suggestions" id="search-suggestions">
      <div class="suggestion-label">Popular Searches</div>
      <div class="suggestion-item" onclick="doSearch('Running Shoes')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        Running Shoes <span class="hot">HOT</span>
      </div>
      <div class="suggestion-item" onclick="doSearch('Compression Tights')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        Compression Tights
      </div>
      <div class="suggestion-item" onclick="doSearch('Basketball Jersey')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        Basketball Jersey <span class="hot">NEW</span>
      </div>
      <div class="suggestion-item" onclick="doSearch('Yoga Pants Women')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        Yoga Pants Women
      </div>
      <div class="suggestion-item" onclick="doSearch('Hoodies Sale')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        Hoodies Sale <span class="hot">SALE</span>
      </div>
      <div id="live-suggestions"></div>
    </div>
  </div>

  <!-- Nav Icons -->
  <div class="nav-icons">
    <button class="nav-icon-btn" title="Wishlist" onclick="openPage('wishlist-page')">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      <span class="badge" id="wishlist-badge" style="display:none">0</span>
    </button>
    <button class="nav-icon-btn" title="Account" onclick="openModal('login-modal')">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </button>
    <button class="nav-icon-btn" title="Cart" onclick="toggleCart()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <span class="badge" id="cart-badge">0</span>
    </button>
  </div>
</nav>

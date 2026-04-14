/**
 * BHUK.IN — main.js
 * Fixed: renderNavbar/Footer + initReveal called AFTER page renders its own content.
 * All shared components here. Page-specific JS in each HTML file.
 */

/* ══════════════════════════════════════════════════════════
   CART
══════════════════════════════════════════════════════════ */
let cart = [];
try { cart = JSON.parse(localStorage.getItem('bhuk_cart') || '[]'); } catch(e){ cart = []; }

function saveCart(){ try{ localStorage.setItem('bhuk_cart', JSON.stringify(cart)); }catch(e){} }

function addToCart(item){
  const ex = cart.find(c => c.id === item.id);
  if(ex){ ex.qty++; } else { cart.push({...item, qty:1}); }
  saveCart(); updateCartCount(); renderCartItems();
  const btn = document.querySelector('.nav-cart-btn');
  if(btn){ btn.style.transform='scale(1.25)'; setTimeout(()=>btn.style.transform='',200); }
  openCart();
}

function removeFromCart(id){
  cart = cart.filter(c => c.id !== id);
  saveCart(); updateCartCount(); renderCartItems();
}

function changeQty(id, delta){
  const item = cart.find(c => c.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartCount(); renderCartItems(); }
}

function cartTotal(){
  return cart.reduce((s,c) => s + c.price * c.qty, 0).toFixed(2);
}

function updateCartCount(){
  const n = cart.reduce((s,c) => s + c.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = n;
    el.style.display = n > 0 ? 'flex' : 'none';
  });
}

/* ── Cart sidebar ── */
function openCart(){
  let overlay = document.getElementById('cart-overlay');
  if(!overlay){
    overlay = document.createElement('div');
    overlay.id = 'cart-overlay';
    overlay.className = 'cart-overlay';
    overlay.onclick = e => { if(e.target === overlay) closeCart(); };
    overlay.innerHTML = `
      <div class="cart-panel">
        <div class="cart-header">
          <span class="cart-header-title">Cart</span>
          <button class="cart-close" onclick="closeCart()">✕</button>
        </div>
        <div class="cart-body" id="cart-body"></div>
        <div class="cart-footer" id="cart-footer" style="display:none">
          <div class="cart-total-row">
            <span class="cart-total-label">Total</span>
            <span class="cart-total-val" id="cart-total-val">$0.00</span>
          </div>
          <button class="btn btn-gold" style="width:100%;justify-content:center;padding:14px;font-size:15px">
            Checkout →
          </button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    renderCartItems();
  }
  setTimeout(() => overlay.classList.add('open'), 10);
}

function closeCart(){
  const overlay = document.getElementById('cart-overlay');
  if(overlay){ overlay.classList.remove('open'); }
}

function renderCartItems(){
  const body   = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  const total  = document.getElementById('cart-total-val');
  if(!body) return;

  if(!cart.length){
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍️</div>
        <div class="cart-empty-title">You don't have any orders here!</div>
        <div class="cart-empty-sub">let's change that!</div>
      </div>`;
    if(footer) footer.style.display = 'none';
    return;
  }

  body.innerHTML = `<div class="cart-items">
    ${cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img||''}" alt="${item.name}"
          onerror="this.src='https://placehold.co/50x50/F5F5F5/aaa?text=🍽️'">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${(item.price*item.qty).toFixed(2)}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
        </div>
      </div>`).join('')}
  </div>`;

  if(footer){ footer.style.display='block'; }
  if(total) total.textContent = `$${cartTotal()}`;
}

/* ══════════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════════ */
function renderNavbar(){
  const el = document.getElementById('navbar-placeholder');
  if(!el) return;

  const links = BHUK.nav.links.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('');
  const mobileLinks = BHUK.nav.links.map(l =>
    `<a href="${l.href}" onclick="closeMobileMenu()">${l.label}</a>`
  ).join('');
  const cartCount = cart.reduce((s,c)=>s+c.qty,0);

  el.innerHTML = `
    <nav class="navbar" id="navbar">
      <div class="container">
        <div class="nav-inner">
          <a href="index.html" class="nav-logo">
            <img class="nav-logo-img" src="assets/img/logo.png" alt="logo"
              onerror="this.style.display='none'">
            <span class="nav-logo-text">Multi <span>R</span></span>
          </a>
          <div class="nav-links">${links}</div>
          <div class="nav-right">
            <button class="nav-cart-btn" onclick="openCart()">
              🛍️ Cart
              <span class="cart-count" style="display:${cartCount>0?'flex':'none'}">${cartCount}</span>
            </button>
            <a href="${BHUK.nav.login_link}" class="nav-signin">Sign in</a>
          </div>
          <button class="hamburger" id="hamburger" onclick="toggleMobileMenu()">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
      ${mobileLinks}
      <div class="mobile-menu-actions">
        <a href="${BHUK.nav.login_link}"  class="btn btn-ghost" onclick="closeMobileMenu()">Sign in</a>
        <a href="${BHUK.nav.signup_link}" class="btn btn-gold"  onclick="closeMobileMenu()">Sign Up</a>
      </div>
    </div>`;

  /* Active link */
  const page = location.pathname.split('/').pop()||'index.html';
  el.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if(a.getAttribute('href') === page) a.classList.add('active');
  });

  /* Scroll shadow */
  window.addEventListener('scroll',()=>{
    const nav = document.getElementById('navbar');
    if(nav) nav.style.boxShadow = scrollY>20 ? '0 4px 30px rgba(0,0,0,.4)' : 'none';
  });

  /* Outside click close */
  document.addEventListener('click', e => {
    const menu = document.getElementById('mobile-menu');
    const ham  = document.getElementById('hamburger');
    if(menu && ham && !menu.contains(e.target) && !ham.contains(e.target)){
      menu.classList.remove('open');
      ham.classList.remove('open');
    }
  });
}

function toggleMobileMenu(){
  document.getElementById('mobile-menu')?.classList.toggle('open');
  document.getElementById('hamburger')?.classList.toggle('open');
}
function closeMobileMenu(){
  document.getElementById('mobile-menu')?.classList.remove('open');
  document.getElementById('hamburger')?.classList.remove('open');
}

/* ══════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════ */
function renderFooter(){
  const el = document.getElementById('footer-placeholder');
  if(!el) return;
  const f = BHUK.footer;

  el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="footer-logo">
              <img class="footer-logo-img" src="assets/img/logo.png" alt="logo" onerror="this.style.display='none'">
              <span class="footer-logo-text">${BHUK.site.name}</span>
            </div>
            <div class="footer-newsletter">
              <input type="email" class="footer-email-input" placeholder="Email" id="footer-email">
              <button class="footer-subscribe" onclick="footerSubscribe()">Subscribe</button>
            </div>
          </div>
          <div class="footer-cols">
            <div class="footer-col">
              <div class="footer-col-title">Company</div>
              <ul>${f.company_links.map(l=>`<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
            </div>
            <div class="footer-col">
              <div class="footer-col-title">Service</div>
              <ul>${f.service_links.map(l=>`<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
            </div>
            <div class="footer-col">
              <div class="footer-col-title">Categories</div>
              <ul>${f.category_links.map(l=>`<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="footer-copy">${BHUK.site.copyright}</span>
          <div class="footer-app-badges">
            <a href="${f.appstore_link}">
              <img src="${f.appstore_img}" alt="App Store" onerror="this.src='https://placehold.co/100x32/000/fff?text=App+Store'">
            </a>
            <a href="${f.playstore_link}">
              <img src="${f.playstore_img}" alt="Google Play" onerror="this.src='https://placehold.co/110x32/000/fff?text=Google+Play'">
            </a>
          </div>
          <span class="footer-website">Website: ${BHUK.site.website}</span>
        </div>
      </div>
    </footer>`;
}

function footerSubscribe(){
  const input = document.getElementById('footer-email');
  if(!input||!input.value.includes('@')){ if(input) input.style.borderColor='var(--gold)'; return; }
  input.style.borderColor='';
  const btn = input.nextElementSibling;
  btn.textContent='✓ Done!';
  setTimeout(()=>{ btn.textContent='Subscribe'; input.value=''; }, 3000);
}

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL  — called AFTER page content is rendered
══════════════════════════════════════════════════════════ */
function initReveal(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const delay = parseFloat(e.target.style.transitionDelay||0)*1000;
        setTimeout(()=>e.target.classList.add('vis'), delay);
        obs.unobserve(e.target);
      }
    });
  }, { threshold:0.07 });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>obs.observe(el));
}

/* ══════════════════════════════════════════════════════════
   PHONE FLAG SELECTOR
══════════════════════════════════════════════════════════ */
function buildPhoneField(containerId, inputId){
  const container = document.getElementById(containerId);
  if(!container) return;
  const first = BHUK.country_codes[0];

  container.innerHTML = `
    <div class="f-phone-wrap">
      <div class="f-phone-flag" id="flag-btn-${containerId}" onclick="toggleFlagDd('${containerId}')">
        <span id="flag-em-${containerId}">${first.flag}</span>
        <span id="flag-code-${containerId}">${first.code}</span>
        <span style="font-size:10px">▾</span>
        <div class="flag-dropdown" id="flag-dd-${containerId}">
          ${BHUK.country_codes.map(c=>`
            <div class="flag-option" onclick="pickFlag('${containerId}','${c.flag}','${c.code}',event)">
              ${c.flag} ${c.name} ${c.code}
            </div>`).join('')}
        </div>
      </div>
      <input type="tel" class="f-input f-phone-num" id="${inputId}" placeholder="">
    </div>`;
}

function toggleFlagDd(id){
  document.getElementById(`flag-dd-${id}`)?.classList.toggle('open');
}
function pickFlag(id, flag, code, e){
  e.stopPropagation();
  document.getElementById(`flag-em-${id}`).textContent   = flag;
  document.getElementById(`flag-code-${id}`).textContent = code;
  document.getElementById(`flag-dd-${id}`)?.classList.remove('open');
}

document.addEventListener('click', e => {
  document.querySelectorAll('.flag-dropdown.open').forEach(dd => {
    if(!dd.closest('.f-phone-flag')?.contains(e.target)) dd.classList.remove('open');
  });
});

/* ══════════════════════════════════════════════════════════
   PASSWORD TOGGLE
══════════════════════════════════════════════════════════ */
function togglePw(inputId, btnId){
  const input = document.getElementById(inputId);
  const btn   = document.getElementById(btnId);
  if(!input||!btn) return;
  const show = input.type==='password';
  input.type = show ? 'text' : 'password';
  btn.textContent = show ? '🙈' : '👁️';
}

/* ══════════════════════════════════════════════════════════
   POLICY RENDERER
══════════════════════════════════════════════════════════ */
function renderPolicy(data, containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = `
    <div class="policy-wrap">
      <h1 class="policy-main-title">${data.title}</h1>
      <div class="policy-intro">${data.intro}</div>
      ${data.sections.map(s=>`
        <div class="policy-section">
          <h3 class="policy-heading">${s.heading}</h3>
          ${s.content ? `<p class="policy-text">${s.content}</p>` : ''}
          ${s.items ? `<div class="policy-list">
            ${s.items.map(i=>`<div class="policy-list-item"><span>${i}</span></div>`).join('')}
          </div>` : ''}
        </div>`).join('')}
    </div>`;
}

/* ══════════════════════════════════════════════════════════
   INIT — runs on every page
   Note: initReveal() is called by each page AFTER rendering
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  updateCartCount();
});

export function renderHeader() {
  let currentUrl='';
  currentUrl = "/"+window.location.pathname.substring(window.location.pathname.indexOf('/') + 1);
  window.location.pathname
  const header = document.querySelector('header');
  header.innerHTML = `<nav><img
              src="/images/whitelogo.svg"
              alt="Logo for the WDD Society"
              width="100px"
              id="nav-logo"
          />
          <button type="button" id="menu-button">Menu</button>
          <ul class="nav-links">
          <li><a href="/" >Home</a></li>
          <li><a href="/members/">Members</a></li>
          <li><a href="/projects/">Projects</a></li>
          <li><a href="/contact/">Contact</a></li>
          <li><a href="/gallery/">Gallery</a></li>
          <li><a href="/about/">About</a></li>
          </ul>
          </nav>`;
  const activeLink = document.querySelector(`a[href="${currentUrl}"]`);
  console.log(activeLink)
  activeLink.parentElement.classList.add('active');
  const menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
  });
}
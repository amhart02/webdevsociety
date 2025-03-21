export function renderHeader() {
  let currentUrl='';
  currentUrl = "/"+window.location.pathname.substring(window.location.pathname.indexOf('/webdevsociety/') + 1);
  window.location.pathname
  const header = document.querySelector('header');
  header.innerHTML = `<nav><img
              src="/webdevsociety/images/whitelogo.svg"
              alt="Logo for the WDD Society"
              width="100px"
              id="nav-logo"
          />
          <button type="button" id="menu-button">Menu</button>
          <ul class="nav-links">
          <li><a href="/webdevsociety/" >Home</a></li>
          <li><a href="/webdevsociety/members/">Members</a></li>
          <li><a href="/webdevsociety/projects/">Projects</a></li>
          <li><a href="/webdevsociety/contact/">Contact</a></li>
          <li><a href="/webdevsociety/gallery/">Gallery</a></li>
          <li><a href="/webdevsociety/about/">About</a></li>
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
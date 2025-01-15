import { enhanceMenuWithCustomKeys } from '../utils/compute-menu-items';
import parseMenu from '../utils/dom-parser';
import { NAV_SELECTOR } from '../utils/env';
import NavbarDesktop from './desktop';
// import NavbarMobile from './mobile';

function Navbar() {
  const menuEl = document.querySelector(NAV_SELECTOR);

  if (!menuEl) {
    return null;
  }

  const menuJSON = parseMenu(menuEl.outerHTML);
  const navbarData = enhanceMenuWithCustomKeys(menuJSON);

  const data = {
    id: 'home',
    label: 'Accueil',
    to: '/',
    children: navbarData,
  };

  return (
    <nav className="w-full select-none flex-col">
      <NavbarDesktop data={data} />
      {/* <NavbarMobile data={data} /> */}
    </nav>
  );
}

export default Navbar;

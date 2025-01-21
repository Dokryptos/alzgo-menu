import * as React from 'react';

import { enhanceMenuWithCustomKeys } from '../utils/compute-menu-items';
import parseMenu from '../utils/dom-parser';
import { NAV_SELECTOR } from '../utils/env';
import DesktopNavItem from './desktop';
// import NavbarMobile from './mobile';

function Navbar() {
  const [, setRendered] = React.useState(false);

  React.useEffect(() => {
    if (import.meta.env.DEV) {
      setRendered(true);
    }
  }, []);

  const menuEl = document.querySelector(NAV_SELECTOR);

  const menuJSON = parseMenu(menuEl?.outerHTML || '');
  const navbarItems = enhanceMenuWithCustomKeys(menuJSON);

  return (
    <>
      <nav
        className="hidden h-16 w-full bg-dark_blue font-host lg:flex lg:rounded-b-2xl"
        ref={() => {
          document.querySelector(NAV_SELECTOR)?.classList.add('lg:hidden');
        }}
      >
        <ul className="flex w-full items-center justify-center gap-4">
          {navbarItems?.map((item) => <DesktopNavItem key={item.id} item={item} />)}
        </ul>
      </nav>

      {/* <NavbarMobile items={navbarItems} /> */}
    </>
  );
}

export default Navbar;

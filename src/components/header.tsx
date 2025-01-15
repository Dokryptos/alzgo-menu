import logoNav from '../assets/navbar/logo-nav.png';
import loupe from '../assets/navbar/loupe.png';
import account from '../assets/navbar/account-nav.png';
import favoris from '../assets/navbar/favoris-nav.png';
import shop from '../assets/navbar/shopping-nav.png';
import logoMobile from '../assets/navbar/logo-nav-mobile.png';
import logoMobileText from '../assets/navbar/title-logo-mobile.png';

function Header() {
  return (
    <div className="flex flex-col items-center laptop:flex-row laptop:justify-between laptop:p-4 laptop:pl-12 laptop:pr-12">
      <img className="hidden w-20 laptop:flex" src={logoNav} />
      <div className="flex items-center laptop:hidden">
        <img className="h-16" src={logoMobile} />
        <img className="w-28" src={logoMobileText} />
      </div>
      <div>
        <form id="search-form" className="flex rounded-full border-[1px] border-dark_blue">
          <input
            className="m-4 ml-6 w-64 laptop:w-96"
            type="search"
            id="search-input"
            placeholder="Recherche une pièce"
          />
          <button className="h-100 rounded-r-full border-l-[1px] bg-second_blue p-3" id="search-btn">
            <img src={loupe} className="w-6" />
          </button>
        </form>
      </div>
      <div className="m-4 laptop:m-0">
        <ul className="flex list-none space-x-4">
          <li className="cursor-pointer flex-col text-center">
            <img className="w-8 laptop:w-6" src={shop} />
          </li>
          <li className="hidden cursor-pointer flex-col text-center laptop:flex">
            <img className="w-6" src={favoris} />
          </li>
          <li className="cursor-pointer flex-col text-center">
            <img className="w-8 laptop:w-6" src={account} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

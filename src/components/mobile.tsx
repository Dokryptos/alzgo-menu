import arrowRight from '../assets/navbar/menu/arrowRight.png';
import { NavbarItem } from '../types/navbar-item';
import * as React from 'react';
import { cn } from '../utils/cn';

function Trigger({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <button className="absolute right-1 m-4 flex flex-col gap-1 laptop:hidden" onClick={onClick} type="button">
      <span
        className={cn(`block h-0.5 w-6 bg-second_blue transition-transform`, isOpen && 'translate-y-1.5 rotate-45')}
      />
      <span className={cn(`block h-0.5 w-6 bg-second_blue transition-opacity`, isOpen && 'opacity-0')} />
      <span
        className={cn(`block h-0.5 w-6 bg-second_blue transition-transform`, isOpen && '-translate-y-1.5 -rotate-45')}
      />
    </button>
  );
}

const CategoryItem = ({ child, onClick, isOpen }: { child: NavbarItem; onClick: () => void; isOpen: boolean }) => {
  return (
    <li className="text-black">
      <div className="group flex w-full items-center justify-between p-4 pl-6 pr-6" onClick={onClick}>
        <img src={child?.img} key={child.id} className="w-20" />
        <h3>{child.label}</h3>
        <img
          src={arrowRight}
          alt="grandChildArrow"
          className={cn(`h-8 w-auto transition duration-200`, isOpen ? 'rotate-0' : 'rotate-180')}
        />
      </div>
      <hr className="w-100 border-black" />
      {isOpen && (
        <ul className="m-8">
          {child.children?.map((grandchild) => (
            <li key={grandchild.id} className="mb-3 text-base">
              <a href={child.to} key={child.id}>
                {grandchild.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

function NavbarMobile({ data }: { data: NavbarItem }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openGrandchildren, setOpenGrandchildren] = React.useState<Record<string, boolean>>({});

  const toggleGrandchildren = (childId: string) => {
    setOpenGrandchildren((prev) => ({
      ...prev,
      [childId]: !prev[childId],
    }));
  };

  return (
    <nav className="w-full flex-col laptop:hidden">
      <div
        className={`h-12 w-full bg-dark_blue transition-transform duration-200 laptop:absolute laptop:flex laptop:rounded-b-2xl`}
      >
        <Trigger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </div>

      <ul className={`w-full laptop:flex laptop:justify-center`}>
        {data.children?.map(
          (parent) =>
            parent.children &&
            parent.children.length > 0 && (
              <li className="laptop:group laptop:relative" key={parent.id}>
                <div className="hidden w-full text-white hover:text-second_blue laptop:flex laptop:p-2">
                  <a href={parent.to} key={parent.id}>
                    {parent.label}
                  </a>
                </div>
                <div
                  className={cn(
                    `z-2 w-full bg-white transition-transform duration-300 laptop:hidden`,
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                  )}
                >
                  <ul className="w-100 transform text-dark_blue transition-all duration-200">
                    {parent.children?.map(
                      (child) =>
                        child.children &&
                        child.children.length > 0 && (
                          <CategoryItem
                            key={`${parent.id}-${child.id}`}
                            child={child}
                            onClick={() => toggleGrandchildren(child.id)}
                            isOpen={openGrandchildren[child.id]}
                          />
                        )
                    )}
                  </ul>
                </div>
              </li>
            )
        )}
      </ul>
    </nav>
  );
}

export default NavbarMobile;

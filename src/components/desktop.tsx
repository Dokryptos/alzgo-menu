import { cn } from '../utils/cn';
import { NavbarItem } from '../types/navbar-item';
import Icon from './icon';

interface CategoryItemProps {
  item: NavbarItem;
}

function CategoryItem({ item }: CategoryItemProps) {
  return (
    <li className="text-base">
      <img src={item.img} className="lg:w-20" />

      <p className="mb-2 mt-4 font-semibold text-black">{item.label}</p>

      <ul>
        {item.children?.map((grandChild) => (
          <li className="text-sm" key={grandChild.id}>
            <a className="font-normal text-black hover:text-second_blue" href={grandChild.to} key={grandChild.id}>
              {grandChild.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

interface ParentMenuItemProps {
  parent: NavbarItem;
}

function ParentMenuItem({ parent }: ParentMenuItemProps) {
  const hasChildren = parent.children && parent.children.length > 0;

  return (
    <li className="group">
      <a
        href={parent.to}
        key={parent.id}
        className="mx-8 flex w-full gap-2 p-2 font-semibold text-white transition hover:text-second_blue"
      >
        {parent.label}

        {hasChildren && <Icon name="chevron-down" className="transition duration-200 group-hover:rotate-180" />}
      </a>

      {hasChildren && (
        <div
          className={cn(
            'fixed left-1/2 -translate-x-1/2 pt-2', // fixed position
            // transition based on group hover
            'h-0 w-4/5 translate-y-8 overflow-hidden opacity-0 transition-all duration-200', // default state
            'group-hover:grid group-hover:h-full group-hover:translate-y-0 group-hover:overflow-visible group-hover:opacity-100'
          )}
        >
          <ul
            className={cn(
              'size-full max-h-[80vh] overflow-auto rounded-sm bg-white p-8 pb-32 shadow',
              'grid grid-cols-4 grid-rows-[repeat(minmax(1fr,150px),3)] gap-8' // grid layout
            )}
          >
            {parent.children!.map(
              (child) => child.children && child.children.length > 0 && <CategoryItem key={child.id} item={child} />
            )}
          </ul>
        </div>
      )}
    </li>
  );
}

function NavbarDesktop({ data }: { data: NavbarItem }) {
  return (
    <nav className={cn('hidden h-16 w-full bg-dark_blue font-host', 'lg:flex lg:rounded-b-2xl')}>
      <ul className="flex w-full items-center justify-center">
        {data.children?.map((parent) => <ParentMenuItem key={parent.id} parent={parent} />)}
      </ul>
    </nav>
  );
}

export default NavbarDesktop;

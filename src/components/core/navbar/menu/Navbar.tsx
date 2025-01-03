// import * as React from "react";
// import { useState } from "react";

// import { NavbarItem } from "../type";

// import navbarData from "../../../../data/json";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openGrandchildren, setOpenGrandchildren] = useState<
//     Record<string, boolean>
//   >({});
//   const [hoveredParent, setHoveredParent] = useState<string | null>(null);

//   const toggleGrandchildren = (childId: string) => {
//     setOpenGrandchildren((prev) => ({
//       ...prev,
//       [childId]: !prev[childId],
//     }));
//   };

//   return (
//     <>
//       <nav className="flex-col w-full select-none">
//         <div className="laptop:p-4 laptop:justify-between laptop:pl-12 laptop:pr-12 laptop:flex-row flex-col flex items-center ">
//           <img className="w-20 hidden laptop:flex" src={logoNav} />
//           <div className=" flex items-center laptop:hidden">
//             <img className="h-16" src={logoMobile} />
//             <img className="w-28" src={logoMobileText} />
//           </div>
//           <div>
//             <form
//               id="search-form"
//               className=" rounded-full border-dark_blue border-[1px] flex"
//             >
//               <input
//                 className=" m-4 ml-6 w-64 laptop:w-96 "
//                 type="search"
//                 id="search-input"
//                 placeholder="Recherche une pièce"
//               />
//               <button
//                 className="border-l-[1px] h-100 bg-second_blue rounded-r-full p-3"
//                 id="search-btn"
//               >
//                 <img src={loupe} className="w-6" />
//               </button>
//             </form>
//           </div>
//           <div className="laptop:m-0 m-4">
//             <ul className="flex list-none space-x-4">
//               <li className=" flex-col text-center cursor-pointer">
//                 <img className="laptop:w-6 w-8" src={shop} />
//               </li>
//               <li className="laptop:flex hidden flex-col text-center cursor-pointer">
//                 <img className="w-6" src={favoris} />
//               </li>
//               <li className=" flex-col text-center cursor-pointer">
//                 <img className="laptop:w-6 w-8" src={account} />
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div
//           className={`laptop:flex laptop:rounded-b-2xl h-12 w-full bg-dark_blue laptop:absolute transition-transform duration-200`}
//         >
//           <button
//             className="laptop:hidden absolute flex flex-col gap-1 right-1 m-4"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span
//               className={`block w-6 h-0.5 bg-second_blue transition-transform ${
//                 isOpen ? "rotate-45 translate-y-1.5" : ""
//               }`}
//             />
//             <span
//               className={`block w-6 h-0.5 bg-second_blue transition-opacity ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`block w-6 h-0.5 bg-second_blue transition-transform ${
//                 isOpen ? "-rotate-45 -translate-y-1.5" : ""
//               }`}
//             />
//           </button>
//         </div>
//         <ul className={`laptop:flex laptop:justify-center w-full`}>
//           {navbarData.children?.map((parent: NavbarItem, i: number) => (
//             <li
//               className="laptop:relative laptop:group"
//               key={i}
//               onMouseEnter={() => setHoveredParent(parent.id)}
//               onMouseLeave={() => setHoveredParent(null)}
//             >
//               <div className="laptop:flex hidden text-white laptop:p-2 w-full hover:text-second_blue">
//                 <a href={parent.to} key={parent.id}>
//                   {parent.label}
//                 </a>
//               </div>
//               {/* Laptop/Dekstop version */}
//               <div className="laptop:grid hidden">
//                 {hoveredParent === parent.id && parent.children?.length > 0 && (
//                   <ul className="laptop:grid bg-white fixed left-[10%] hidden grid-rows-3 grid-cols-4 gap-8 w-[80%] p-8">
//                     {parent.children?.map((child: NavbarItem, idx: number) => (
//                       <>
//                         <li
//                           className={`text-base ${
//                             child.id === "products-cabin"
//                               ? "row-span-2"
//                               : "row-span-1"
//                           }`}
//                         >
//                           <img
//                             src={child.img}
//                             key={idx}
//                             className="laptop:w-16"
//                           />
//                           <div className="mb-2">{child.label}</div>
//                           <ul>
//                             {child.children?.map(
//                               (grandChild: NavbarItem, idx: number) => (
//                                 <>
//                                   <li className="text-sm" key={idx}>
//                                     <a href={grandChild.to} key={grandChild.id}>
//                                       {grandChild.label}
//                                     </a>
//                                   </li>
//                                 </>
//                               )
//                             )}
//                           </ul>
//                         </li>
//                       </>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//               {/* Mobile version */}
//               <div
//                 className={`laptop:hidden w-full bg-white transition-transform duration-300 ${
//                   isOpen ? "translate-x-0" : "-translate-x-full"
//                 } z-2`}
//               >
//                 {
//                   <ul className="w-100 text-dark_blue transform  transition-all duration-200 ">
//                     {parent.children?.map((child: NavbarItem, idx: number) => (
//                       <>
//                         <li key={idx} className=" text-black">
//                           <div
//                             className=" flex justify-between items-center group w-full p-4 pl-6 pr-6"
//                             onClick={() => toggleGrandchildren(child.id)}
//                           >
//                             <img
//                               src={child?.img}
//                               key={child.id}
//                               className="w-16"
//                             />
//                             <h3>{child.label}</h3>
//                             <img
//                               src={arrowRight}
//                               alt="grandChildArrow"
//                               className={`w-auto h-8 transition duration-200 ${
//                                 openGrandchildren[child.id]
//                                   ? "rotate-0"
//                                   : "rotate-180"
//                               }`}
//                             />
//                           </div>
//                           <hr className="border-black w-100" />
//                           {openGrandchildren[child.id] && (
//                             <ul className="m-8">
//                               {child.children?.map(
//                                 (grandchild: NavbarItem, idx: number) => (
//                                   <>
//                                     <li key={idx} className="text-base mb-3">
//                                       <a href={child.to} key={child.id}>
//                                         {grandchild.label}
//                                       </a>
//                                     </li>
//                                   </>
//                                 )
//                               )}
//                             </ul>
//                           )}
//                         </li>
//                       </>
//                     ))}
//                   </ul>
//                 }
//               </div>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

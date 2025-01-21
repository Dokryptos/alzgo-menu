import { NavbarItem } from '../types/navbar-item';
import { MenuItem } from './dom-parser';
import { BASE_URL } from './env';

const tableaudebord = '/assets/board.svg';
const carrosserie = '/assets/carrosserie.svg';
const demarrage = '/assets/demarrage.svg';
const direction = '/assets/direction.svg';
const divers = '/assets/divers.svg';
const eclairage = '/assets/eclairage.svg';
const freinage = '/assets/freinage.svg';
const habitacle = '/assets/habitacle.svg';
const moteur = '/assets/moteur.svg';
const multimedia = '/assets/multimedia.svg';
const boitedevitesse = '/assets/vitesse.svg';
const antipollution = '/assets/antipollution.svg';

const imgMap: { [key: string]: string } = {
  tableaudebord,
  carrosserie,
  demarrage,
  direction,
  divers,
  eclairage,
  freinage,
  habitacle,
  moteur,
  multimedia,
  boitedevitesse,
  antipollution,
};

function enhanceMenuWithCustomKeys(menuItems: MenuItem[]): NavbarItem[] {
  return menuItems.map((item) => {
    const id = item.text
      .toLowerCase()
      .replace(/\s+/g, '') // remove spaces
      .normalize('NFD') // remove accents
      .replace(/[-/_]/g, '') // remove - / _
      .replace(/[^\w]/g, ''); // remove non-word characters
    const to = new URL(item.href).pathname;
    const img = `${BASE_URL}${imgMap[id] || tableaudebord}`;

    return {
      id,
      label: item.text,
      to,
      img,
      children: item.children ? enhanceMenuWithCustomKeys(item.children) : [],
    };
  });
}

export { enhanceMenuWithCustomKeys };

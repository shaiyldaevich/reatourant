import { create } from "zustand";

interface HeaderStore {
  links: {
    name: string;
    href: string;
  }[];

  isOpenBurgerMenu: boolean;
  setIsOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  links : [
  { name: "Interior", href: "/interior" },
  { name: "About Us", href: "/about-us" },
  { name: "Menu", href: "/menu" },
  { name: "Contacts", href: "/contacts" },
],

  isOpenBurgerMenu: false,
  setIsOpenBurgerMenu: (isOpenBurgerMenu) =>
    set(() => ({ isOpenBurgerMenu: isOpenBurgerMenu })),
}));

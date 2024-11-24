import trans from "@/app/locales/translations.et.json";
const nav = trans.nav;
interface IUrl {
  label: string;
  description: string;
  url: string;
}

export const URLS = {
  contact: "kontakt",
  home: "/",
  about: "minust",
  gallery: "galerii",
};

export function goToGalleryWithFilter(filter: string): string {
  const link = `${URLS.gallery}:${filter}`;
  return encodeURIComponent(link);
}

export const NAVS: IUrl[] = [
  { label: nav.home, url: URLS.home, description: nav.homeDesc },
  { label: nav.contact, url: URLS.contact, description: nav.contactDesc },
  { label: nav.about, url: URLS.about, description: nav.aboutDesc },
  { label: nav.gallery, url: URLS.gallery, description: nav.galleryDesc },
];

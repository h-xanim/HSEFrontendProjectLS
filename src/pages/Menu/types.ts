export interface MenusetsResponse {
  photosets: Menusets;
  stat: "ok";
}

export interface Photo {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  isprimary: string;
  ispublic: number;
  secret: string;
  server: string;
  title: string;
}

export interface Menuset {
  id: string;
  owner: string;
  ownername: string;
  page: number;
  pages: number;
  per_page: number;
  perpage: number;
  photo: Photo[];
  primary: string;
  title: string;
  total: number;
}

export interface MenusetResponse {
  photoset: Menuset;
  stat: "ok";
}

export interface Menusets {
  page: number;
  pages: number;
  perpage: number;
  photoset: MenusetAlbum[];
  total: number;
}

export interface MenusetAlbum {
  id: string;
  title: {
    _content: string;
  };
  photos: number;
  primary_photo_extras: {
    url_z: string;
    width_z: number;
    height_z: number;
  };
}

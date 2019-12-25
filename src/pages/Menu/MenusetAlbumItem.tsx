import * as React from "react";
import { MenusetAlbum } from "./types";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

interface Props {
  album: MenusetAlbum;
}

export const MenusetAlbumItem: React.FC<Props> = ({ album }) => {
  const additionalClass =
    album.primary_photo_extras.width_z - album.primary_photo_extras.height_z > 0
      ? styles.horizontalImage
      : styles.verticalImage;

  return (
    <Link className={styles.card} to={`${routes.menu}/${album.id}`} title="Смотреть серию">
      <div className={styles.meta}>
        <header className={styles.header}>{album.title._content}</header>
        <span className={styles.countPhotos}>{album.photos} photos</span>
      </div>
      <img
        className={`${styles.mainImage} ${additionalClass}`}
        src={album.primary_photo_extras.url_z}
        width={album.primary_photo_extras.width_z}
        height={album.primary_photo_extras.height_z}
        alt={album.title._content}
      />
    </Link>
  );
};

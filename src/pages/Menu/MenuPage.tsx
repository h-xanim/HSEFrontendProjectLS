import React from "react";
import styles from "./Menu.module.css";
import { Loader } from "../../components/Loader";
import fetch from "cross-fetch";
import { MenusetAlbum, MenusetsResponse } from "./types";
import { RequestStatus } from "../../util";
import { MenusetAlbumItem } from "./MenusetAlbumItem";

interface State {
  photosets: MenusetAlbum[];
  requestStatus: RequestStatus;
}

export const MenuPage: React.FC = () => {
  const [state, setState] = React.useState<State>({
    photosets: [],
    requestStatus: RequestStatus.Default,
  });

  React.useEffect(() => {
    setState({ photosets: [], requestStatus: RequestStatus.IsFetching });

    fetch("/api/albums")
      .then(response => response.json())
      .then((response: MenusetsResponse) => {
        setState({
          photosets: response.photosets.photoset,
          requestStatus: RequestStatus.IsLoaded,
        });
      })
      .catch(() => {
        setState({
          photosets: [],
          requestStatus: RequestStatus.IsFailed,
        });
      });
  }, []);

  return (
    <div className={styles.main}>
      {state.requestStatus === RequestStatus.IsFetching ? (
        <Loader />
      ) : (
        state.photosets.map(album => <MenusetAlbumItem key={album.id} album={album} />)
      )}
    </div>
  );
};

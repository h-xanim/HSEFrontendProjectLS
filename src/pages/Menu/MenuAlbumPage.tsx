import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { MenusetItems } from "./MenusetItems";
import { RequestStatus } from "../../util";
import { Menuset, MenusetResponse } from "./types";
import { routes } from "../../routes";
import { Loader } from "../../components/Loader";
import { LinkButton } from "../../components/Button/LinkButton";
import styles from "./Menu.module.css";

interface State {
  photoset: Menuset | null;
  requestStatus: RequestStatus;
}

const btnWrapperStyles: React.CSSProperties = { textAlign: "center", marginBottom: 100 };
const headerStyles = [styles.photosetHeader, styles.center].join(" ");

export const MenuAlbumPage: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { id } = match.params;

  const [state, setState] = React.useState<State>({
    photoset: null,
    requestStatus: RequestStatus.Default,
  });

  React.useEffect(() => {
    if (!id) {
      return;
    }

    setState({ photoset: null, requestStatus: RequestStatus.IsFetching });

    fetch(`/api/albums/${id}`)
      .then(response => response.json())
      .then((response: MenusetResponse) => {
        setState({
          photoset: response.photoset,
          requestStatus: RequestStatus.IsLoaded,
        });
      })
      .catch(() => {
        setState({
          photoset: null,
          requestStatus: RequestStatus.IsFailed,
        });
      });
  }, [id]);

  if (state.requestStatus === RequestStatus.IsFetching) {
    return <Loader />;
  }

  return (
    <>
      {state.photoset && (
        <>
          <div className={headerStyles}>{state.photoset.title}</div>
          <MenusetItems photos={state.photoset.photo} />
          <div style={btnWrapperStyles}>
            <LinkButton to={routes.menu}>Вернуться в меню</LinkButton>
          </div>
        </>
      )}
    </>
  );
};

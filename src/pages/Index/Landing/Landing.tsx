import React from "react";
import styles from "./Landing.module.css";
import { LinkButton } from "../../../components/Button/LinkButton";

export const Landing: React.FC = () => (
  <main className={styles.landing}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Что может быть лучше вечера в кругу друзей и близких? Только вечер, проведенный в ресторане Лесная Сказка!{" "}
        <a><img src={require("./restoran.png")} alt="restoran"/>
        </a>
      </div>
      <div className={styles.center}>
        <LinkButton target="blank" to={"//restoranlesnayaskazka.ru/"}>
          Перейти на сайт
        </LinkButton>
      </div>
    </div>
  </main>
);

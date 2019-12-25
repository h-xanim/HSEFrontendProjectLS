import React from "react";
import styles from "./About.module.css";

export const About: React.FC = () => (
  <section className={styles.about}>
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <img src={require("./images/1.jpg")} width="350" height="350" alt="Лесная Сказка" />
      </div>
      <article>
        <p>
          Большой ресторан «Лесная сказка» радушно приглашает гостей и жителей Северной столицы!
          Можно долго рассказывать о комфортной атмосфере и наших блюдах, но лучше самому получить большую порцию удовольствия! Приглашаем посетить ресторан «Лесная сказка» с цветами, фонтаном, милыми беседками, большой зимней террасой.
        </p>
        <p>
          Большой ресторан обладает несомненными преимуществами:
          мы предлагаем клиентам длительное меню «живых блюд», т.е. блюд, приготовленных штатно, по всем правилам из свежих продуктов, а не по специальным запросам из полуфабрикатов, что нередко встречается в заведениях среднего или небольшого размера;
          у нас всегда много посетителей;
          высокая скорость обслуживания;
          приемлемые цены;
          ресторан с живой музыкой в СПб;
          шоу-программы, которые материально не обременяют посетителей;
          просторная, оборудованная современной техникой сцена.
        </p>
        <p>
          Отведайте восхитительные блюда нашей сказочной кухни.
          Изюминкой меню являются блюда кавказской кухни: несколько видов шашлыка, саджа, кебабов, хинкали, грузинских закусок, хачапури по-аджарски, азербайджанская долма, пахлава, ореховый десерт — люля. Посетителям нравится европейская кухня, русские салаты, детское меню, клюквенный морс. Изумительный ассортимент блюд для любителей рыбы, например, форель, фаршированная креветками, дорадо с соусом и овощами, судак, сибас, семга, форель в фольге с овощами, семга на гриле, стейк из форели, семга, фаршированная морепродуктами.
        </p>
        <p>Наши повара готовят шедевры, которые не оставят вас равнодушными. Мы знаем, что в ресторан приходят, чтобы отведать вкусную еду и послушать хорошую музыку. Именно потому мы предлагаем посетителям сервис на высоком уровне, необыкновенно вкусную кухню и приятную живую музыку по невысоким ценам для Санкт-Петербурга.
        </p>
        <p>
          Уютный ресторан в СПб расположен в любимой горожанами зоне отдыха — парке Сказок имени Бабушкина, являющемся объектом, который представляет историческую, культурную и другую ценность. Здесь вас окружают сирень, жасмин, акация, орех, шиповник, рябина, клен, береза, дуб, ясень, липа. Это старейший зеленый массив Невского района города Санкт-Петербург. Просторный двор «Лесной сказки» наполнен шатрами и беседками, оформленными текстилем.
        </p>
      </article>
      <div className={styles.contacts}>
        Приходите в «Лесную сказку», получите неземное удовольствие!
        <a className={styles.contactListLink} href="//restoranlesnayaskazka.ru/">
          <img src={require("./images/lesnayaskazka.png")} alt="ЛЕСНАЯ СКАЗКА" />
        </a>
        <a className={styles.contactListLink} href="//www.instagram.com/restoranlesnayaskazka.ru/">
          <img src={require("./images/instagram.png")} alt="ЛЕСНАЯ СКАЗКА" /></a>
        <a className={styles.contactListLink} href="//vk.com/restoranlesnayaskazka">
          <img src={require("./images/vk.png")} alt="Vk РЕСТОРАН ЛЕСНАЯ СКАЗКА" />
          <span className={styles.contactListText}>РЕСТОРАН ЛЕСНАЯ СКАЗКА</span>
        </a>
      </div>
    </div>
  </section>
);

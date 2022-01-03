import style from "./CardItem.module.css";

const CardItem = (props) => {
  return <div className={style.card}>{props.children}</div>;
};

export default CardItem;

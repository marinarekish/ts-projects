import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

export type RecipeCardProps = {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
};

export function RecipeCard({ id, title, imgUrl, description }: RecipeCardProps) {
  return (
    <Link to={`/${id}`}>
      <div className={styles.card}>
        <img src={imgUrl} className={styles.img} />
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
}

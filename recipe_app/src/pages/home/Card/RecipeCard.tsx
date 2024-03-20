import { Badge, Card, CardImg, Stack } from "react-bootstrap";
import { Tag } from "../../../types/types";
import styles from "./RecipeCard.module.css";
import { Link } from "react-router-dom";

export type SimplifiedRecipe = {
  tags: Tag[];
  title: string;
  id: string;
  imgUrl: string;
  description: string;
};

export function RecipeCard({ id, title, tags, imgUrl, description }: SimplifiedRecipe) {
  return (
    <Card as={Link} to={`/${id}`} className={`h-100 g-auto text-reset text-decoration-none ${styles.card}`}>
      <Card.Body>
        <Stack gap={2} className="align-items-center justify-content-space-around h-100">
          <CardImg src={imgUrl}></CardImg>
          <span className="fs-5">{title}</span>
          <span className="fs-7">{description}</span>
          {tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="justify-content-center flex-wrap">
              {tags.map((tag) => (
                <Badge key={tag.id} className="text-truncate">
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
}

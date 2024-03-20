import { Badge, Button, CardImg, Col, Row, Stack } from "react-bootstrap";
import { useRecipe } from "./RecipeLayout";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

type RecipeProps = {
  onDelete: (id: string) => void;
};

export function ShowRecipe({ onDelete }: RecipeProps) {
  const recipe = useRecipe();
  const navigate = useNavigate();

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{recipe.title}</h1>
          {recipe.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {recipe.tags.map((tag) => (
                <Badge key={tag.id} className="text-truncate">
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        {/* buttons */}
        <Col xs="auto">
          <Stack direction="horizontal" gap={3} className="justify-content-end">
            <Link to={`/${recipe.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(recipe.id), navigate("/");
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <CardImg className="w-50" src={recipe.imgUrl} />
      </Row>
      <Row>
        <h4>Description</h4>
        <ReactMarkdown className="mb-4">{recipe.description}</ReactMarkdown>
      </Row>
      <Row>
        <h4>Ingredients</h4>
        <ReactMarkdown className="mb-4">{recipe.ingredients}</ReactMarkdown>
      </Row>
      <Row>
        <h4>Directions</h4>
        <ReactMarkdown className="mb-4">{recipe.directions}</ReactMarkdown>
      </Row>
    </>
  );
}

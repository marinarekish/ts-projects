import { useMemo, useState } from "react";
import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag } from "../../types/types";
import { RecipeCard, SimplifiedRecipe } from "./Card/RecipeCard";
// import { EditTagsModal } from "./EditTagsModal";

type RecipeListProps = {
  availableTags: Tag[];
  recipes: SimplifiedRecipe[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};

export function RecipeList({ availableTags, recipes, onUpdateTag, onDeleteTag }: RecipeListProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");
  const [editTagsModalIsOpen, setEditTagsModalIsOpen] = useState(false);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipes) => {
      return (
        // search by title
        (title === "" || recipes.title.toLowerCase().includes(title.toLowerCase())) &&
        // to find card with all of the matching tags
        (selectedTags.length === 0 ||
          selectedTags.every((tag) => recipes.tags.some((recipeTag) => recipeTag.id === tag.id)))
      );
    });
  }, [title, selectedTags, recipes]);

  return (
    <>
      <Row className="mb-4 align-items-center">
        <Col>
          <h1>RECIPE BOX</h1>
        </Col>
        <Col xs="auto">
          <Stack direction="horizontal" gap={3} className="justify-content-end">
            <Link to="/new">
              <Button variant="primary">Add a Recipe</Button>
            </Link>
            <Button variant="outline-secondary" onClick={() => setEditTagsModalIsOpen(true)}>
              Edit tags
            </Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Search by name</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {filteredRecipes.map((recipe) => (
          <Col key={recipe.id}>
            <RecipeCard
              id={recipe.id}
              title={recipe.title}
              tags={recipe.tags}
              description={recipe.description}
              imgUrl={recipe.imgUrl}
            />
          </Col>
        ))}
      </Row>
      <EditTagsModal
        onUpdateTag={onUpdateTag}
        onDeleteTag={onDeleteTag}
        show={editTagsModalIsOpen}
        handleClose={() => setEditTagsModalIsOpen(false)}
        availableTags={availableTags}
      />
    </>
  );
}

type EditTagsModalProps = {
  show: boolean;
  availableTags: Tag[];
  handleClose: () => void;
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};

export function EditTagsModal({ availableTags, handleClose, show, onDeleteTag, onUpdateTag }: EditTagsModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control type="text" value={tag.label} onChange={(e) => onUpdateTag(tag.id, e.target.value)} />
                </Col>
                <Col xs="auto">
                  <Button onClick={() => onDeleteTag(tag.id)} variant="outline-danger">
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

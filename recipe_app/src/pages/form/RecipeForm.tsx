import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { v4 as uuidV4 } from "uuid";
import { RecipeData, Tag } from "../../types/types";

type RecipeFormProps = Partial<RecipeData> & {
  onSubmit: (data: RecipeData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function RecipeForm({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  servings = "",
  tags = [],
  imgUrl = "",
  description = "",
  ingredients = "",
  directions = "",
}: RecipeFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const servingsRef = useRef<HTMLInputElement>(null);
  const markdownDescriptionsRef = useRef<HTMLTextAreaElement>(null);
  const markdownIngredientsRef = useRef<HTMLTextAreaElement>(null);
  const markdownDirectionsRef = useRef<HTMLTextAreaElement>(null);

  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      servings: servingsRef.current!.value,
      tags: selectedTags,
      description: markdownDescriptionsRef.current!.value,
      ingredients: markdownIngredientsRef.current!.value,
      directions: markdownDirectionsRef.current!.value,
      imgUrl: imageRef.current!.value,
    });

    navigate("..");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col className="mb-4">
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} defaultValue={title} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="servings">
              <Form.Label>Servings</Form.Label>
              <Form.Control ref={servingsRef} type="number" min={2} max={15} defaultValue={servings} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label };
                  onAddTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
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
          <Form.Group controlId="imageUrl" className="mb-4">
            <Form.Label>Image link</Form.Label>
            <Form.Control ref={imageRef} defaultValue={imgUrl} required />
          </Form.Group>
          <Form.Group controlId="markdownDescription" className="mb-4">
            <Form.Label>Short Description</Form.Label>
            <Form.Control ref={markdownDescriptionsRef} defaultValue={description} as="textarea" rows={3} required />
          </Form.Group>
          <Form.Group controlId="markdownIngredients" className="mb-4">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control ref={markdownIngredientsRef} defaultValue={ingredients} as="textarea" rows={7} required />
          </Form.Group>
          <Form.Group controlId="markdownDirections">
            <Form.Label>Directions</Form.Label>
            <Form.Control ref={markdownDirectionsRef} defaultValue={directions} as="textarea" rows={7} required />
          </Form.Group>
        </Row>
        <Stack direction="horizontal" gap={3} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}

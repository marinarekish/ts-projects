import { useMemo, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { NoteCard, SimplifiedNoteProps } from "../note/miniCard/NoteCard";
import { Tag } from "../../types/types";
import { EditTagsModal } from "./EditTagsModal";

type NoteListProps = {
  availableTags: Tag[];
  notes: SimplifiedNoteProps[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};

export function NoteList({ availableTags, notes, onDeleteTag, onUpdateTag }: NoteListProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");
  const [editTagModalIsOpen, setEditTagModalIsOpen] = useState(false);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        // search by title
        (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) &&
        // to find card with all of the matching tags
        (selectedTags.length === 0 || selectedTags.every((tag) => note.tags.some((noteTag) => noteTag.id === tag.id)))
      );
    });
  }, [title, selectedTags, notes]);

  return (
    <>
      {/* header row with title and main buttons */}
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col>
          <Stack direction="horizontal" gap={2} className="justify-content-end">
            <Link to="/new">
              <Button variant="primary">Create</Button>
            </Link>
            <Button onClick={() => setEditTagModalIsOpen(true)} variant="outline-secondary">
              Edit Tags
            </Button>
          </Stack>
        </Col>
      </Row>
      {/* search row */}
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="title">
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
      {/* Cards row */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {filteredNotes.map((note) => (
          <Col key={note.id}>
            <NoteCard id={note.id} title={note.title} tags={note.tags} />
          </Col>
        ))}
      </Row>
      <EditTagsModal
        show={editTagModalIsOpen}
        handleClose={() => setEditTagModalIsOpen(false)}
        availableTags={availableTags}
        onDeleteTag={onDeleteTag}
        onUpdateTag={onUpdateTag}
      />
    </>
  );
}

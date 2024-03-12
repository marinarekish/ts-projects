import { Button, Col, Form, Row, Modal, Stack } from "react-bootstrap";
import { Tag } from "../../types/types";

type EditTagsModalProps = {
  show: boolean;
  availableTags: Tag[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, value: string) => void;
  handleClose: () => void;
};

export function EditTagsModal({ availableTags, onDeleteTag, onUpdateTag, handleClose, show }: EditTagsModalProps) {
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

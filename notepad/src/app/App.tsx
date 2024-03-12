import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap staff
import { Container } from "react-bootstrap";

import { Navigate, Route, Routes } from "react-router-dom"; // route features
import { v4 as uuidV4 } from "uuid"; // library for IDs creating
import { useMemo } from "react"; // react hook

import { useLocalStorage } from "../hooks/useLocalStorageHook"; // custom hook
import { NoteData, RawNote, Tag } from "../types/types"; // custom types

import { NewNote } from "../pages/newNote/NewNote";
import { NoteList } from "../pages/home/NoteList";
import { NoteLayout } from "../pages/note/NoteLayout";
import { NoteShow } from "../pages/note/NoteShow";
import { EditNote } from "../pages/note/EditNote";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return { ...note, tags: tags.filter((tag) => note.tagIds.includes(tag.id)) };
    });
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return [...prevNotes, { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) }];
    });
  }

  function onAddTag(tag: Tag) {
    setTags((prev) => [...prev, tag]);
  }

  function updateTag(id: string, label: string) {
    setTags((prevTags) => {
      return prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label };
        }
        return tag;
      });
    });
  }

  function deleteTag(id: string) {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  }

  function onUpdateNode(id: string, { tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
        }
        return note;
      });
    });
  }

  function onDeleteNote(id: string) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <Container className="my-4">
      <Routes>
        {/* home page - NoteList */}
        <Route
          path="/"
          element={
            <NoteList availableTags={tags} notes={notesWithTags} onDeleteTag={deleteTag} onUpdateTag={updateTag} />
          }
        />

        {/* create note page - NewNote */}
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={onAddTag} availableTags={tags} />} />

        {/* full card info show - NoteLayout */}
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<NoteShow onDelete={onDeleteNote} />} />
          <Route path="edit" element={<EditNote onSubmit={onUpdateNode} onAddTag={onAddTag} availableTags={tags} />} />
        </Route>

        {/* all incorrect paths will re-direct to the home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;

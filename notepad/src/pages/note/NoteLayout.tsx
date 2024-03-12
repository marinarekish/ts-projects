import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";
import { Note } from "../../types/types";

type NoteLayoutProps = {
  notes: Note[];
};

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();

  // search the note with the id we try to go to
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNote() {
  return useOutletContext<Note>();
}

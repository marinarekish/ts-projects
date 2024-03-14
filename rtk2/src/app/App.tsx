import "./appStyles.css";
import { SongPlaylist } from "../components/SongsPlaylist";
import { MoviePlaylist } from "../components/MoviesPlaylist";
import { reset } from "./actions";
import { useAppDispatch } from "./hooks";

export function App() {
  const dispatch = useAppDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <div className="divider">
        <SongPlaylist />
        <hr />
        <MoviePlaylist />
      </div>
    </div>
  );
}

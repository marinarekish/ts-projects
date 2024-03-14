import { createRandomSong } from "../data/data";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addSong, removeSong, selectSongs } from "../app/features/songsSlice";

export function SongPlaylist() {
  // To Do:
  // Get list of songs
  const songPlaylist = useAppSelector(selectSongs);
  const dispatch = useAppDispatch();

  const handleSongAdd = (song: string) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song: string) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song: string) => {
    return (
      <li key={song}>
        {song}
        <button onClick={() => handleSongRemove(song)} className="button is-danger">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button onClick={() => handleSongAdd(createRandomSong())} className="button is-link">
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

// for formatting duration we need to account for hours, mins and secs

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 });

export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60 / 60);
  const mins = Math.floor((duration - hours * 60 * 60) / 60);
  const secs = duration % 60;

  // checking duration to show hours if it needed
  if (hours > 0) {
    return `${hours}:${LEADING_ZERO_FORMATTER.format(mins)}:${LEADING_ZERO_FORMATTER.format(secs)}`;
  }
  // if video shorter than 1 hour - return mins and secs
  return `${mins}:${LEADING_ZERO_FORMATTER.format(secs)}`;
}

/**
 * Formats a date string to 'D MMMM YYYY' (e.g. '10 June 2017').
 * Removes weekday names and ordinal suffixes. If not a valid date, returns as-is.
 * Handles comma-separated or multi-date strings by formatting each date part if possible.
 */
export function formatWorkshopDate(dateStr: string): string {
  if (!dateStr || dateStr.trim().toLowerCase() === 'tba') return dateStr;
  const parts = dateStr.split(/, ?/);
  const formattedParts = parts.map(part => {
    let cleaned = part.replace(/(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/i, '').trim();
    cleaned = cleaned.replace(/(\d{1,2})(st|nd|rd|th)/g, '$1');
    const d = new Date(cleaned);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }
    return part.trim();
  });
  return formattedParts.join(', ');
}


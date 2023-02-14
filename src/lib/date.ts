export function formatDate(date: string | undefined) {
  if (!date)
    return undefined;

  return (new Date(date)).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  );
}

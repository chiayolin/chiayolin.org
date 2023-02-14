export function formatDate(date: string | undefined) {
  if (!date)
    return undefined;

  const MONTH = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const [y, m, d] = date.slice(0, 10).split('-');

  return `${MONTH[Number(m) - 1]} ${d}, ${y}`;

}

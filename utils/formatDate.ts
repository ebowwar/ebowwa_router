import { isValid, parse, format } from 'date-fns';

export function formatDate(date: number | Date) {
  return isValid(date) ? format(date, 'do MMMM yyyy') : 'N/A';
}

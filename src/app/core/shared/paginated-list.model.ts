export interface PaginatedList<T> {
  data: Array<T>;
  cursor: string | null;
}

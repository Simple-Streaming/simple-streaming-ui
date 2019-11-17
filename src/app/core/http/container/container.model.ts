export interface Container {
  id: string;
  type: string;
  children: PaginatedResult<Container>;
  properties: Array<Property>;
}

export interface PaginatedResult<T> {
  data: Array<T>;
  cursor: string | null;
}

export interface Property {
  id: string;
  name: string;
  propertyType: PropertyType;
  dataType: DataType;
  category: PropertyCategory;
  value: string;
}

export type PropertyType = 'READ_ONLY' | 'INCONSISTENT' | 'WEAKLY_CONSISTENT' | 'STRONGLY_CONSISTENT';

export type DataType = 'STRING' | 'BOOLEAN' | 'INTEGER';

export type PropertyCategory = 'SETTING' | 'DATA';

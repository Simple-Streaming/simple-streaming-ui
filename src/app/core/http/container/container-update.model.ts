export interface ContainerUpdate {
  propertyId: string;
  oldValue?: string;
  newValue: string;
}

export type ContainerUpdates = Array<ContainerUpdate>;

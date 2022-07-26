export interface CaravansGetType {
  count: number;
  items: Caravan[];
}

export interface Caravan {
  location: string;
  instantBookable: boolean;
  name: string;
  passengersCapacity: number;
  sleepCapacity: number;
  price: number;
  toilet: boolean;
  shower: boolean;
  vehicleType: VehicleType;
  pictures: string[];
}

export enum VehicleType {
  Alcove = "Alcove",
  BuiltIn = "BuiltIn",
  Campervan = "Campervan",
  Intergrated = "Intergrated",
}

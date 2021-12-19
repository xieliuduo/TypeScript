export enum CarTransmission {
    Automatic = 200,
    Manual = 300
  }
  
  interface Motorcycle {
    vType: "motorcycle"; // discriminant
    make: number; // year
  }
  
  interface Car {
    vType: "car"; // discriminant
    transmission: CarTransmission
  }
  
  interface Truck {
    vType: "truck"; // discriminant
    capacity: number; // in tons
  }
export type Pilot = {
    id: number;
    name: string;
    profileImage: string;
    workExperience: number;
    location: {
      city: string;
      state: string;
      country: string;
    };
    geolocation: {
      latitude: number;
      longitude: number;
    };
  }
  
  interface Admin {
    id: number;
    name: string;
    profileImage: string;
    geolocation: {
      latitude: number;
      longitude: number;
    };
  }
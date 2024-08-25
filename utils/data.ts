interface PilotProfile {
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

export const pilotProfiles: PilotProfile[] = [
    {
      name: "John Smith",
      profileImage: "https://example.com/images/john_smith.jpg",
      workExperience: 12,
      location: {
        city: "Gurgaon",
        state: "Haryana",
        country: "India",
      },
      geolocation: {
        latitude: 28.4595,
        longitude: 77.0266,
      },
    },
    {
      name: "Maria Garcia",
      profileImage: "https://example.com/images/maria_garcia.jpg",
      workExperience: 8,
      location: {
        city: "Delhi",
        state: "Delhi",
        country: "India",
      },
      geolocation: {
        latitude: 28.6139,
        longitude: 77.2090,
      },
    },
    {
      name: "Liam Brown",
      profileImage: "https://example.com/images/liam_brown.jpg",
      workExperience: 15,
      location: {
        city: "Noida",
        state: "Uttar Pradesh",
        country: "India",
      },
      geolocation: {
        latitude: 28.5355,
        longitude: 77.3910,
      },
    },
    {
      name: "Olivia Wilson",
      profileImage: "https://example.com/images/olivia_wilson.jpg",
      workExperience: 10,
      location: {
        city: "Faridabad",
        state: "Haryana",
        country: "India",
      },
      geolocation: {
        latitude: 28.4089,
        longitude: 77.3178,
      },
    },
    {
      name: "Noah Johnson",
      profileImage: "https://example.com/images/noah_johnson.jpg",
      workExperience: 7,
      location: {
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        country: "India",
      },
      geolocation: {
        latitude: 28.6692,
        longitude: 77.4538,
      },
    },
    {
      name: "Emma Davis",
      profileImage: "https://example.com/images/emma_davis.jpg",
      workExperience: 9,
      location: {
        city: "Greater Noida",
        state: "Uttar Pradesh",
        country: "India",
      },
      geolocation: {
        latitude: 28.4744,
        longitude: 77.5030,
      },
    },
    {
      name: "William Martinez",
      profileImage: "https://example.com/images/william_martinez.jpg",
      workExperience: 11,
      location: {
        city: "Gurgaon",
        state: "Haryana",
        country: "India",
      },
      geolocation: {
        latitude: 28.4595 + (Math.random() * 0.1 - 0.05),  // Randomly adjust within 5 km
        longitude: 77.0266 + (Math.random() * 0.1 - 0.05),  // Randomly adjust within 5 km
      },
    },
    {
      name: "Ava Hernandez",
      profileImage: "https://example.com/images/ava_hernandez.jpg",
      workExperience: 14,
      location: {
        city: "Delhi",
        state: "Delhi",
        country: "India",
      },
      geolocation: {
        latitude: 28.6139 + (Math.random() * 0.1 - 0.05),  // Randomly adjust within 5 km
        longitude: 77.2090 + (Math.random() * 0.1 - 0.05),  // Randomly adjust within 5 km
      },
    },
    {
      name: "James White",
      profileImage: "https://example.com/images/james_white.jpg",
      workExperience: 13,
      location: {
        city: "Noida",
        state: "Uttar Pradesh",
        country: "India",
      },
      geolocation: {
        latitude: 28.5355 + (Math.random() * 0.1 - 0.05),  // Randomly adjust within 5 km
        longitude: 77.3910 + (Math.random() * 0.1 - 0.05),  // Randomly adjust within 5 km
      },
    },
    {
      name: "Sophia Lee",
      profileImage: "https://example.com/images/sophia_lee.jpg",
      workExperience: 6,
      location: {
        city: "Faridabad",
        state: "Haryana",
        country: "India",
      },
      geolocation: {
        latitude: 28.4089 + (Math.random() * 0.1 - 0.05),  // Randomly adjust within 5 km
        longitude: 77.3178 + (Math.random() * 0.1 - 0.05),  // Randomly adjust within 5 km
      },
    },
    {
      name: "Benjamin Walker",
      profileImage: "https://example.com/images/benjamin_walker.jpg",
      workExperience: 16,
      location: {
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        country: "India",
      },
      geolocation: {
        latitude: 28.6692 + (Math.random() * 0.2 - 0.6),  // Randomly adjust within 10 km
        longitude: 77.4538 + (Math.random() * 0.2 - 0.6),  // Randomly adjust within 10 km
      },
    },
    {
      name: "Isabella Perez",
      profileImage: "https://example.com/images/isabella_perez.jpg",
      workExperience: 10,
      location: {
        city: "Greater Noida",
        state: "Uttar Pradesh",
        country: "India",
      },
      geolocation: {
        latitude: 28.4744 + (Math.random() * 0.2 - 0.1),  // Randomly adjust within 10 km
        longitude: 77.5030 + (Math.random() * 0.2 - 0.1),  // Randomly adjust within 10 km
      },
    },
    {
      name: "Elijah Lewis",
      profileImage: "https://example.com/images/elijah_lewis.jpg",
      workExperience: 4,
      location: {
        city: "Gurgaon",
        state: "Haryana",
        country: "India",
      },
      geolocation: {
        latitude: 28.4595 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
        longitude: 77.0266 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
      },
    },
    {
      name: "Mia Clark",
      profileImage: "https://example.com/images/mia_clark.jpg",
      workExperience: 8,
      location: {
        city: "Delhi",
        state: "Delhi",
        country: "India",
      },
      geolocation: {
        latitude: 28.6139 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
        longitude: 77.2090 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
      },
    },
    {
      name: "Alexander Robinson",
      profileImage: "https://example.com/images/alexander_robinson.jpg",
      workExperience: 17,
      location: {
        city: "Noida",
        state: "Uttar Pradesh",
        country: "India",
      },
      geolocation: {
        latitude: 28.5355 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
        longitude: 77.3910 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
      },
    },
    {
      name: "Amelia Young",
      profileImage: "https://example.com/images/amelia_young.jpg",
      workExperience: 9,
      location: {
        city: "Faridabad",
        state: "Haryana",
        country: "India",
      },
      geolocation: {
        latitude: 28.4089 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
        longitude: 77.3178 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
      },
    },
    {
      name: "Henry Hall",
      profileImage: "https://example.com/images/henry_hall.jpg",
      workExperience: 12,
      location: {
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        country: "India",
      },
      geolocation: {
        latitude: 28.6692 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
        longitude: 77.4538 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
      },
    },
    {
      name: "Harper Allen",
      profileImage: "https://example.com/images/harper_allen.jpg",
      workExperience: 7,
      location: {
        city: "Greater Noida",
        state: "Uttar Pradesh",
        country: "India",
      },
      geolocation: {
        latitude: 28.4744 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
        longitude: 77.5030 + (Math.random() * 0.3 - 0.15),  // Randomly adjust within 15 km
      },
    },
    {
      name: "Michael King",
      profileImage: "https://example.com/images/michael_king.jpg",
      workExperience: 18,
      location: {
        city: "Gurgaon",
        state: "Haryana",
        country: "India",
      },
      geolocation: {
        latitude: 28.4595 + (Math.random() * 0.4 - 0.4),  // Randomly adjust within 20 km
        longitude: 77.0266 + (Math.random() * 0.4 - 0.4),  // Randomly adjust within 20 km
      },
    },
    {
      name: "Ella Scott",
      profileImage: "https://example.com/images/ella_scott.jpg",
      workExperience: 5,
      location: {
        city: "Delhi",
        state: "Delhi",
        country: "India",
      },
      geolocation: {
        latitude: 28.6139 + (Math.random() * 0.4 - 0.4),  // Randomly adjust within 20 km
        longitude: 77.2090 + (Math.random() * 0.4 - 0.4),  // Randomly adjust within 20 km
      },
    },
    {
      name: "Daniel Adams",
      profileImage: "https://example.com/images/daniel_adams.jpg",
      workExperience: 14,
      location: {
        city: "Noida",
        state: "Uttar Pradesh",
        country: "India",
      },
      geolocation: {
        latitude: 28.5355 + (Math.random() * 0.4 - 0.4),  // Randomly adjust within 20 km
        longitude: 77.3910 + (Math.random() * 0.4 - 0.4),  // Randomly adjust within 20 km
      },
    }
];

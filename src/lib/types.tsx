export interface Player {
    id: number;
    fullName: string;
    birthDate: string;
    age: number;
    nationality: string;
    city: string;
    province: string;
    height: string;
    weight: string;
    dominantFoot: "Diestro" | "Zurdo" | "Ambidiestro";
    mainPosition: string;
    secondaryPositions: string[];
    profileSummary: string;
    currentLevel: string;
    objective: string;
    image: string;
    videoUrl?: string;
    scoutingStatus: string;
    clubsInterested: string[];
    stats: {
      season: string;
      matches: number;
      goals: number;
      assists: number;
      yellowCards: number;
      redCards: number;
    };
    skills: {
      technique: number;
      speed: number;
      strength: number;
      vision: number;
      finishing: number;
      passing: number;
    };
    achievements: string[];
  }
export interface Player {
    id: number;
    fullName: string;
    birthDate: string;
    nationality: string;
    city: string;
    province: string;
    height: string;
    weight: string;
    dominantFoot: "Diestro" | "Zurdo" | "Ambidiestro";
    transferStatus: "Libre" | "A préstamo" | "Transferido" | "En negociación";
    mainPosition: string;
    secondaryPositions: string[];
    profileSummary: string;
    currentLevel?: string;
    objective: string;
    image?: string;
    videoUrl?: string;
    scoutingStatus?: string;
    clubsInterested?: string[];
    clubsHistory?: string[];
    stats: {
      season: string;
      matches: number;
      goals: number;
      assists: number;
      yellowCards: number;
      redCards: number;
      goalsReceived: number;
      cleanSheets: number;
    };
    skills: {
      technique: number;
      speed: number;
      strength: number;
      vision: number;
      finishing: number;
      passing: number;
      reflexes: number;
      crossHandling: number;
      oneOnOnes: number;
      footWork: number;
      leadership: number;
      kickingPower: number;
    };
    achievements?: string[];
  }

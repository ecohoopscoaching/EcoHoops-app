export interface Player {
  number: number;
  name: string;
}

export interface Team {
  id: string;
  name: string;
  birthYear: number;
  roster: Player[];
}

export interface Pillar {
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}


import { Team, Pillar } from './types';

export const TEAMS: Team[] = [
  {
    id: 'u15-boys',
    name: 'U15 Boys',
    birthYear: 2011,
    roster: [
      { number: 0, name: 'Jason Badurina' },
      { number: 8, name: 'Ryder Sison' },
      { number: 21, name: 'Savva Donets' },
      { number: 1, name: 'Kingston Torralba' },
      { number: 2, name: 'Aiden Valladolid' },
      { number: 13, name: 'Josh Uppal' },
      { number: 7, name: 'Jacob Sagat' },
      { number: 24, name: 'Noah Hoang' },
      { number: 23, name: 'Alex Kolczynski' },
      { number: 11, name: 'Gurveer Bhatti' },
      { number: 15, name: 'Adole Bhathal' },
      { number: 12, name: 'Gabriel Kangethe' },
    ]
  },
  {
    id: 'u14-girls',
    name: 'U14 Girls',
    birthYear: 2012,
    roster: [
      { number: 3, name: 'Alisha Sapp' },
      { number: 10, name: 'Layla Khawja' },
      { number: 16, name: 'Sydney Kaknevicius' },
      { number: 12, name: 'Calista Aznar' },
      { number: 30, name: 'Laila Gaafar' },
      { number: 5, name: 'Muriam Dhawan' },
      { number: 23, name: 'Aleena Hasan' },
      { number: 8, name: 'Charlotte Barker' },
      { number: 20, name: 'Joury Elmorshedy' },
      { number: 13, name: 'Amaya Small' },
      { number: 21, name: 'Simar Ahmed' },
      { number: 22, name: 'Quinn Quarrington' },
    ]
  }
];

export const PHILOSOPHY_PILLARS: Pillar[] = [
  {
    title: "Play",
    description: "Creativity, community energy, and streetball flair. We embrace the chaos and the art of the game.",
    iconName: "Zap"
  },
  {
    title: "Learn",
    description: "Evidence-based methods from Ecological Dynamics (CLA) and Self-Determination Theory. No line drills, just real adaptation.",
    iconName: "Microscope"
  },
  {
    title: "Grow",
    description: "Zen philosophy. Maintaining a calm mind in a chaotic environment. We build people, not just pros.",
    iconName: "Heart"
  }
];

export const SYSTEM_INSTRUCTION = `
You are the "EcoHoops Assistant", an AI representative for the youth basketball organization EcoHoops.
Founder: Coach Adrian Sapp.
Mission: Revolutionize youth basketball. Prioritize kids emotionally, mentally, and physically. "Anti-Elite" culture fighting burnout.
Motto: "Play, Learn, Grow".
Methodology: Constraints-Led Approach (CLA) and Ecological Dynamics. No line drills. "The Gardener" approach (nurture conditions) vs "The Carpenter" (force outcomes).
Practice: Free-play on arrival. SSG (Small Sided Games).
Book Club: Currently reading "The Inner Game of Tennis".
Teams: U15 Boys (2011) and U14 Girls (2012).
Colors: Navy Blue, Baby Blue, White.

When answering:
1. Be encouraging, wise, and slightly edgy ("Street" flair remains in personality, but branding is Play, Learn, Grow).
2. If asked about drills, explain why we prefer games/constraints over repetition.
3. Keep answers concise (under 100 words unless asked for detail).
`;

import { Game } from '../types/game';

export const games: Game[] = [
  {
    id: '1',
    title: 'Super Mario Clone',
    description: 'Un clone du célèbre jeu Super Mario Bros en JavaScript avec Canvas',
    githubUrl: 'https://github.com/example/super-mario-clone',
    imageUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd',
    category: 'Plateforme',
    tags: ['JavaScript', 'Canvas', 'Jeu']
  },
  {
    id: '2',
    title: 'Snake Game',
    description: 'Le classique jeu Snake réalisé en JavaScript pur',
    githubUrl: 'https://github.com/example/snake-game',
    imageUrl: 'https://images.unsplash.com/photo-1628277613967-6abca504d0ac',
    category: 'Arcade',
    tags: ['JavaScript', 'Canvas', 'Rétro']
  },
  {
    id: '3',
    title: 'Tetris React',
    description: 'Une implémentation moderne de Tetris avec React et TypeScript',
    githubUrl: 'https://github.com/example/tetris-react',
    imageUrl: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87',
    category: 'Puzzle',
    tags: ['React', 'TypeScript', 'Classique']
  }
];
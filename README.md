# React Tic-Tac-Toe Game

A minimal, fully-featured Tic-Tac-Toe game built with React and styled with Tailwind CSS. This project demonstrates React state management, component composition, and includes comprehensive unit tests.

## Features

- 3x3 Game Board - Classic Tic-Tac-Toe grid
- Turn-Based Gameplay - Alternates between X and O players
- Win Detection - Automatically detects wins in rows, columns, and diagonals
- Draw Detection - Recognizes when the game ends in a draw
- Real-Time Status - Shows current player, winner, or draw status
- Reset Game - Start a new game at any time
- Responsive Design - Works on mobile and desktop
- Clean UI - Modern styling with Tailwind CSS

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   
   git clone https://github.com/Sawille/eersterepo.git
   cd eersterepo
   
2. Install dependencies:
   
   npm install
   

### Running the Game

Start the development server:

npm start

Open http://localhost:3000 in your browser.

### Running Tests

Run all unit tests:

npm test

Or with coverage:

npm test -- --coverage


## Project Structure

eersterepo/
├── src/
│   ├── TicTacToe.jsx        # Main game component
│   ├── TicTacToe.test.jsx    # Unit tests for the game
│   └── index.js             # Entry point
├── .github/
│   └── workflows/
│       └── test.yml         # GitHub Actions CI pipeline
├── package.json
├── README.md
└── ...


## Game Rules

1. Players take turns placing X and O on the board
2. The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins
3. If all 9 squares are filled without a winner, the game ends in a draw
4. Click the Reset Game button to start a new game at any time

## Testing

This project uses Jest with React Testing Library for comprehensive testing:

### Test Coverage
- Component rendering verification
- Game state management
- Player turn alternation
- Win detection (all 8 possible win patterns)
- Draw detection
- Move validation (prevents moves after win)
- Reset functionality
- Utility function testing

### Test Commands

# Run tests once
npm test

# Run tests in watch mode
npm test -- --watch

# Run with coverage report
npm test -- --coverage

# Run specific test file
npm test -- TicTacToe.test.jsx


## Continuous Integration

This project uses GitHub Actions to automatically run tests on every push and pull request.

### Workflow

1. On Push to any branch: Tests run automatically
2. On Pull Request: Tests must pass before merging
3. Status Checks: PR status shows test results

See .github/workflows/test.yml for the CI configuration.

## Technologies Used

- React - JavaScript library for building user interfaces
- Tailwind CSS - Utility-first CSS framework for styling
- Jest - JavaScript testing framework
- React Testing Library - Simple and complete React DOM testing utilities
- GitHub Actions - CI/CD pipeline

## Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m Add amazing feature)
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

All PRs must pass the automated tests before merging.

## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.

### npm test

Launches the test runner in interactive watch mode.

### npm run build

Builds the app for production to the build folder.

## Learn More

You can learn more in the Create React App documentation.
To learn React, check out the React documentation.

## License

MIT License
Copyright (c) 2026 Sawille
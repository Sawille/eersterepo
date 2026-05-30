/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Game, { calculateWinner } from './TicTacToe';

describe('TicTacToe Game', () => {
  it('renders the game board with 9 squares', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    expect(squares).toHaveLength(10); // 9 game squares + 1 reset button
  });

  it('shows initial status Next player: X', () => {
    render(<Game />);
    expect(screen.getByText(/Next player: X/i)).toBeInTheDocument();
  });

  it('updates status after X moves', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]);
    expect(screen.getByText(/Next player: O/i)).toBeInTheDocument();
  });

  it('updates status after O moves', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]); // X moves
    fireEvent.click(squares[1]); // O moves
    expect(screen.getByText(/Next player: X/i)).toBeInTheDocument();
  });

  it('detects X win in a row', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[3]); // O
    fireEvent.click(squares[1]); // X
    fireEvent.click(squares[4]); // O
    fireEvent.click(squares[2]); // X wins
    expect(screen.getByText(/Winner: X/i)).toBeInTheDocument();
  });

  it('detects O win in a column', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[2]); // X
    fireEvent.click(squares[4]); // O
    fireEvent.click(squares[3]); // X
    fireEvent.click(squares[7]); // O wins
    expect(screen.getByText(/Winner: O/i)).toBeInTheDocument();
  });

  it('detects win on diagonal', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[4]); // X
    fireEvent.click(squares[2]); // O
    fireEvent.click(squares[8]); // X wins
    expect(screen.getByText(/Winner: X/i)).toBeInTheDocument();
  });

  it('detects draw when all squares are filled', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8];
    moves.forEach(index => {
      fireEvent.click(squares[index]);
    });
    expect(screen.getByText(/Draw!/i)).toBeInTheDocument();
  });

  it('does not allow moves after game is won', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[3]); // O
    fireEvent.click(squares[1]); // X
    fireEvent.click(squares[4]); // O
    fireEvent.click(squares[2]); // X wins
    
    const initialValues = Array.from(screen.getAllByRole('button').slice(0, 9)).map(b => b.textContent);
    fireEvent.click(squares[5]);
    const afterClickValues = Array.from(screen.getAllByRole('button').slice(0, 9)).map(b => b.textContent);
    
    expect(initialValues).toEqual(afterClickValues);
  });

  it('resets the game when reset button is clicked', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    const resetButton = screen.getByText(/Reset Game/i);
    
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(resetButton);
    
    expect(screen.getByText(/Next player: X/i)).toBeInTheDocument();
    
    const gameSquares = screen.getAllByRole('button').slice(0, 9);
    gameSquares.forEach(square => {
      expect(square).toHaveTextContent('');
    });
  });
});

describe('calculateWinner', () => {
  it('returns null for empty board', () => {
    expect(calculateWinner(Array(9).fill(null))).toBeNull();
  });

  it('returns null for incomplete game', () => {
    const squares = ['X', 'O', null, 'X', null, null, null, null, null];
    expect(calculateWinner(squares)).toBeNull();
  });

  it('returns X for top row win', () => {
    const squares = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(calculateWinner(squares)).toBe('X');
  });

  it('returns O for middle column win', () => {
    const squares = [null, 'O', null, null, 'O', null, null, 'O', null];
    expect(calculateWinner(squares)).toBe('O');
  });

  it('returns X for diagonal win', () => {
    const squares = ['X', null, null, null, 'X', null, null, null, 'X'];
    expect(calculateWinner(squares)).toBe('X');
  });
});

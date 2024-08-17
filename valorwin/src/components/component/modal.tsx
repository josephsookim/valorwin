import React from 'react';
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mapWinner: number;
  team1WinProb: number;
  team2WinProb: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, mapWinner, team1WinProb, team2WinProb }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-black bg-opacity-50 p-6 my-8 mx-auto w-full max-w-lg rounded-lg">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Prediction Result</h2>
        <p><strong>Expected Winner:</strong> {mapWinner === 1 ? 'Team 1' : 'Team 2'}</p>
        <p><strong>Team 1 Win Probability:</strong> {(team1WinProb * 100).toFixed(2)}%</p>
        <p><strong>Team 2 Win Probability:</strong> {(team2WinProb * 100).toFixed(2)}%</p>
        <div className="mt-6 text-right">
          <Button onClick={onClose} className="bg-primary text-primary-foreground hover:bg-primary/90">Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import "./styles/VoteButton.css";

const VoteButton = ({ children, voteType, handleVote, disabled }) => {
  return (
    <button
      className={`vote-button ${voteType}`}
      aria-label={`${voteType} Button`}
      onClick={handleVote}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default VoteButton;

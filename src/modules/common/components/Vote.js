import React from "react";

const Vote = () => {
  return (
    <div className="vote-container">
      <span>Do you find it helpful ?</span>
      <div className="vote">
        <button>
          <i className="icon-like"></i>
        </button>
        <button>
          <i className="icon-dislike"></i>
        </button>
      </div>
    </div>
  );
};

export default Vote;

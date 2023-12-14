// Define an object representing the sample votes
const sampleVotes = { upvotes: 13, downvotes: 0 };
// Define a function named getVoteCount that takes an object with upvotes and downvotes properties
const getVoteCount = (votes) => {
  // Calculate the net vote count by subtracting the number of downvotes from upvotes
  // This formula represents the net difference between upvotes and downvotes
  return votes.upvotes - votes.downvotes;
};

// Return the calculated net vote count
console.log(getVoteCount(sampleVotes));

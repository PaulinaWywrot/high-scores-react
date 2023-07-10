const ScoresAscending = (player1, player2) => {
  if (player1.s < player2.s) {
    return -1;
  } else if (player1.s > player2.s) {
    return 1;
  } else {
    return 0;
  }
};

const ScoresDescending = (player1, player2) => {
  if (player1.s > player2.s) {
    return -1;
  } else if (player1.s < player2.s) {
    return 1;
  } else {
    return 0;
  }
};
export { ScoresDescending, ScoresAscending };

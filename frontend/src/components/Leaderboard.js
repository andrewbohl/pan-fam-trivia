import React, { Component } from "react";
import { LeaderboardTable } from "../styles/LeaderboardStyles";
import Rainbow from "rainbowvis.js";

const renderTableData = (usersArray) => {
  usersArray = usersArray.sort((a, b) => (a.score > b.score ? -1 : 1));
  const colorGradient = createColorGradient(usersArray.length, "green", "red");
  var i = 1;
  return usersArray.map((user) => {
    const { name, score } = user;
    return (
      <tr key={name}>
        <td>{name}</td>
        {/* // 'rgba(30, 130, 76, 1)' */}
        <td style={{ color: "#" + colorGradient.colorAt(i++) }}>{score}</td>
        {/* '#' + colorGradient.colorAt(i++) */}
      </tr>
    );
  });
};

const createColorGradient = (numberOfItems, startColor, endColor) => {
  var rainbow = new Rainbow();
  rainbow.setNumberRange(1, numberOfItems);
  rainbow.setSpectrum(startColor, endColor);
  return rainbow;
};

const Leaderboard = (props) => {
  return (
    <div>
      <h3>Leaderboard</h3>
      <LeaderboardTable class="Leaderboard">
        <tbody>{renderTableData(props.users)}</tbody>
      </LeaderboardTable>
    </div>
  );
};
export default Leaderboard;

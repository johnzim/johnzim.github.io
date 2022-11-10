import { TEAM } from "/team.js";
const { useState } = React;

const Avatar = () => {
  console.log("TEAM", TEAM);
  console.log("this", this);
  const [teamMember, resetTeamMember] = useTeamMember();
  return (
    <div className={'container'}>
    <h1>Who Am I?</h1>
      <h2>Your Team Member is:</h2>
      <p className="team-member-name">{teamMember.name}</p>
      <img className="team-member-face" src={teamMember.face} />

      <button onClick={resetTeamMember}>Re-Roll!</button>
    </div>
  );
};

function getRandomTeamMember() {
  const val = new Date().getTime() % TEAM.length;
  return TEAM[val];
}

function useTeamMember() {
  const [teamMember, setTeamMember] = useState(getRandomTeamMember());
  return [
    teamMember,
    () => {
      let newTeamMember = getRandomTeamMember();
      while (newTeamMember.name === teamMember.name) {
        console.log('reroll name for dupe')
        newTeamMember = getRandomTeamMember();
      }
      setTeamMember(newTeamMember);
    },
  ];
}

const domContainer = document.querySelector("#react-container");
const root = ReactDOM.createRoot(domContainer);
root.render(<Avatar />);

export default Avatar;

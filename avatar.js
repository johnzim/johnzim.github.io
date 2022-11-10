var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _this = this;

import { TEAM } from "/team.js";
var _React = React,
    useState = _React.useState;


var Avatar = function Avatar() {
  console.log("TEAM", TEAM);
  console.log("this", _this);

  var _useTeamMember = useTeamMember(),
      _useTeamMember2 = _slicedToArray(_useTeamMember, 2),
      teamMember = _useTeamMember2[0],
      resetTeamMember = _useTeamMember2[1];

  return React.createElement(
    "div",
    { className: 'container' },
    React.createElement(
      "h2",
      null,
      "Your Team Member is:"
    ),
    React.createElement(
      "p",
      { className: "team-member-name" },
      teamMember.name
    ),
    React.createElement("img", { className: "team-member-face", src: teamMember.face }),
    React.createElement(
      "button",
      { onClick: resetTeamMember },
      "Re-Roll!"
    )
  );
};

function getRandomTeamMember() {
  var val = new Date().getTime() % TEAM.length;
  return TEAM[val];
}

function useTeamMember() {
  var _useState = useState(getRandomTeamMember()),
      _useState2 = _slicedToArray(_useState, 2),
      teamMember = _useState2[0],
      setTeamMember = _useState2[1];

  return [teamMember, function () {
    setTeamMember(getRandomTeamMember());
  }];
}

var domContainer = document.querySelector("#react-container");
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Avatar, null));

export default Avatar;
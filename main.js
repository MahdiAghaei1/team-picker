const membersList = document.getElementById("members");
const membersInput = document.getElementById("members-input");
const membersAddButton = document.getElementById("members-add-button");

const generateTeamsButton = document.getElementById("generate-button");

const teamOneDiv = document.getElementById("team-one");
const teamTwoDiv = document.getElementById("team-two");

membersInput.addEventListener("keyup", (evt) => {
  if (evt.key === "Enter") {
    addTeamMember();
  }
});
membersAddButton.addEventListener("click", addTeamMember);

function addTeamMember(_evt) {
  const name = membersInput.value;

  if (name) {
    const li = document.createElement("li");
    li.textContent = name;
    membersInput.value = "";

    const removeButton = document.createElement("button");
    li.addEventListener("click", () => {
      li.remove();
      removeButton.remove();
    });
    membersList.appendChild(li);
  }
}

generateTeamsButton.addEventListener("click", generateTeams);

function generateTeams() {
  cleanupTeams();

  let members = [];
  membersList.childNodes.forEach((li) => {
    members.push(li.textContent);
  });
  const membersLen = members.length;

  const teamOne = [];
  const teamTwo = [];

  for (let i = 0; i < membersLen; ++i) {
    const randIdx = Math.floor(Math.random() * members.length);
    const randMember = members[randIdx];
    members.splice(randIdx, 1);

    if (i % 2 === 0) {
      teamOne.push(randMember);
    } else {
      teamTwo.push(randMember);
    }
  }

  teamOne.forEach((member) => {
    const div = document.createElement("div");
    div.textContent = member;
    teamOneDiv.append(div);
  });

  teamTwo.forEach((member) => {
    const div = document.createElement("div");
    div.textContent = member;
    teamTwoDiv.append(div);
  });
}

function cleanupTeams() {
  teamOneDiv.innerHTML = "";
  teamTwoDiv.innerHTML = "";
}

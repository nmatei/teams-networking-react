function TeamRow(team) {
  // const id = team.id;
  // const url = team.url;
  const { id, url } = team;
  const displayUrl = url.startsWith("https://github.com/") ? url.substring(19) : url;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selected" value="${id}" />
      </td>
      <td>{team.promotion}</td>
      <td>{team.members}</td>
      <td>{team.name}</td>
      <td>
        <a href="${url}" target="_blank">
          {displayUrl}
        </a>
      </td>
      <td>
        <button type="button" data-id="${id}" className="action-btn edit-btn">
          &#9998;
        </button>
        <button type="button" data-id="${id}" className="action-btn delete-btn">
          ♻
        </button>
      </td>
    </tr>
  );
}

export function TeamsTable() {
  const teams = [
    {
      id: "toze8j1610313009673",
      promotion: "html",
      members: "Nicolae Matei, HTML",
      name: "Web Presentation",
      url: "https://github.com/nmatei/web-intro-presentation",
      createdBy: "nmatei"
    },
    {
      id: "ezabnf1630345987541",
      promotion: "css",
      members: "Nicolae",
      name: "Names",
      url: "https://github.com/nmatei/nmatei.github.io",
      createdBy: "nmatei"
    },
    {
      id: "86mq81630347385708",
      promotion: "js",
      members: "Matei, Andrei",
      name: "JS/HTML/CSS Quiz",
      url: "https://github.com/nmatei/simple-quiz-app",
      createdBy: "nmatei"
    },
    {
      id: "w2aal1630347411901",
      promotion: "js",
      members: "FastTrackIT Students, Nicolae",
      name: "Teams Networking",
      url: "https://github.com/nmatei/teams-networking",
      createdBy: "nmatei"
    }
  ];

  console.info("render table", teams);

  return (
    <form id="teamsForm" action="" method="get">
      <table id="teamsTable">
        <colgroup>
          <col className="select-all-column" />
          <col style={{ width: "20%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "15%" }} />
          <col className="table-actions" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{teams.map(team => TeamRow(team))}</tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input type="text" name="promotion" placeholder="Enter Promotion" required />
            </td>
            <td>
              <input type="text" name="members" placeholder="Enter Members" required />
            </td>
            <td>
              <input type="text" name="name" placeholder="Enter Name" required />
            </td>
            <td>
              <input type="text" name="url" placeholder="Enter URL" required />
            </td>
            <td>
              <button type="submit" className="action-btn" title="Add">
                ➕
              </button>
              <button type="reset" className="action-btn" title="Reset">
                ✖
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

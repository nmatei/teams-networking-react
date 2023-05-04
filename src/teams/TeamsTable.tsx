import React from "react";
import { loadTeams, removeTeamRequest } from "./middleware";
import "./table.css";

type Team = {
  id?: string;
  promotion: string;
  members: string;
  name: string;
  url: string;
};

type Props = {
  loading: boolean;
  teams: Team[];
  removeTeam(id: string): void;
};

export function TeamsTable(props: Props) {
  return (
    <form className={props.loading ? "loading-mask" : ""} action="" method="post" id="editForm">
      <table border={1}>
        <thead>
          <tr>
            <th>Group</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(({ id, url, promotion, name, members }) => {
            return (
              <tr key={id}>
                <td>{promotion}</td>
                <td>{members}</td>
                <td>{name}</td>
                <td>
                  <a href="${url}" target="_blank">
                    open
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    className="delete-btn"
                    onClick={() => {
                      console.info("click", id);
                      props.removeTeam(id!);
                    }}
                  >
                    ✖
                  </a>
                  <a href="#" className="edit-btn">
                    &#9998;
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input type="text" placeholder="Enter Group" name="promotion" required />
            </td>
            <td>
              <input type="text" placeholder="Enter Members" name="members" required />
            </td>
            <td>
              <input type="text" placeholder="Enter Name" name="name" required />
            </td>
            <td>
              <input type="text" placeholder="Enter URL" name="url" required />
            </td>
            <td>
              <button type="submit">💾</button>
              <button type="reset" title="Reset">
                🔄
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export class TeamsTableComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teams: []
    };
  }

  componentDidMount() {
    this.loadTeams();
  }

  async loadTeams() {
    const teams = await loadTeams();
    this.setState({
      loading: false,
      teams
    });
  }

  render() {
    return (
      <TeamsTable
        loading={this.state.loading}
        teams={this.state.teams}
        removeTeam={async id => {
          this.setState({
            loading: true
          });
          await removeTeamRequest(id);
          // this.loadTeams(); // v1

          this.setState(state => {
            const teams = state.teams.filter(team => team.id !== id);
            return {
              loading: false,
              teams
            };
          });
        }}
      />
    );
  }
}

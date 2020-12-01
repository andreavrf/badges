import React from "react";
import "./styles/BadgesList.css";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt="Avatar"
        />
        <div>
          <div className="name">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </div>
          <div className="instagram">
            <FaInstagram />
            <span className="name__instagram">
              {this.props.badge.instagram}
            </span>
          </div>

          <div className="jobTitle">{this.props.badge.jobtitle}</div>
        </div>
      </div>
    );
  }
}
class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}/edit`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;

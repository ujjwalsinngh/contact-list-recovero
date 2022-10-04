import React from "react";
import { Link } from "react-router-dom";
import { deleteContact, updateContact } from "../actions";
import CreateContact from "../pages/create-contact";

class Contact extends React.Component {
  handleDelete = () => {
    const { contact } = this.props;
    console.log(contact.id);
    this.props.dispatch(deleteContact(contact));

    console.log("Deleted");
    alert("Contact has been successfully deleted from Contact-list!");
  };

  // handleUpdate = (e) => {
  //   const { contact } = this.props;
  //   <CreateContact isUpdate={true} id={contact.id} />;

  //   // this.props.dispatch(updateContact(contact));
  //   console.log("Updated 1");
  // };

  render() {
    var isGender = false;
    if (this.props.contact.gender === "male") {
      isGender = true;
    }

    var isPicture = false;
    if (this.props.contact.picture) {
      isPicture = true;
    } else {
      isPicture = false;
    }

    return (
      <div className="contact">
        <div className="contact-card">
          <div className="contact-header">
            <div className="contact-pic">
              {isPicture ? (
                <img src={this.props.contact.picture} />
              ) : (
                <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
              )}
            </div>
            <div className="contact-header-details">
              <div className="contact-header-name">
                {this.props.contact.name}
              </div>
              <div className="contact-header-gender">
                {isGender ? "M" : "F"}
              </div>
            </div>
            <div className="contact-header-group">
              Group - {this.props.contact.group}{" "}
            </div>
          </div>
          <div className="delete-btn-container" onClick={this.handleDelete}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/484/484611.png"
              className="delete-btn"
            />
          </div>

          <Link to="/create-contact" className="link">
            {/* to={{
              pathname: `/create-contact`,
              state: { isUpdate: true, id: this.props.contact.id },
            }} */}
            <div className="contact-phone">{this.props.contact.phone}</div>
          </Link>
        </div>
      </div>
    );
  }

  // console.log(props);
}

export default Contact;

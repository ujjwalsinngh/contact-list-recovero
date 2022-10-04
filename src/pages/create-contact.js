import React from "react";
import { Link } from "react-router-dom";
import { renderContact, createContact } from "../actions";
import { results } from "../results/result";
import { useToasts } from "react-toast-notifications";

function CreateContact(props) {
  // componentDidMount() {
  // const { id, isUpdate } = this.props.location.state;
  // console.log(this.props.isUpdate);
  // if (isUpdate) {
  //   var nam = document.getElementById("itemNameField");
  //   nam.value = contact.name;
  //   console.log(nam);
  //   isUpdate = false;
  // }
  // }

  const { addToast } = useToasts();
  const { store } = props;

  function handleSubmit(e) {
    e.preventDefault();

    var contactName = document.getElementById("itemNameField").value;

    var ele = document.getElementsByName("gender");
    var contactGender = "";
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        contactGender = ele[i].value;
      }
    }

    var contactPhone = document.getElementById("formPhone").value;

    var contactGroup = document.getElementById("usersField").value;
    var id = Math.random();

    if (!contactName || !contactGender || !contactPhone || !contactGroup) {
      addToast("Please enter all mandatory fields", {
        appearance: "error",
      });
    } else if (contactName && contactGender && contactPhone && contactGroup) {
      const newContact = {
        name: contactName,
        gender: contactGender,
        phone: contactPhone,
        group: contactGroup,
        img: "",
        id,
      };

      store.dispatch(createContact(newContact));
      return addToast("Contact created & has been added to contact list!", {
        appearance: "success",
      });
    }
  }

  return (
    <div className="contact-form">
      <div className="back-to-home-cross-container">
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828774.png"
            className="back-to-home-cross"
          />
        </Link>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="inputField">
          <div className="left">
            <div id="leftTitle">Contact Name</div>
          </div>
          <div className="right">
            <input type="text" placeholder="Enter name..." id="itemNameField" />
          </div>
        </div>
        <div className="inputField">
          <div className="left">
            <div id="leftTitle">Gender</div>
          </div>
          <div className="right" id="radios">
            <input type="radio" name="gender" value="male" id="radio" />
            <div className="radio-div">Male</div>
            <input type="radio" name="gender" value="female" id="radio" />
            <div className="radio-div">Female</div>
          </div>
        </div>
        <div className="inputField">
          <div className="left">
            <div id="leftTitle">Phone number</div>
          </div>
          <div className="right" id="fileBlock">
            <input type="Number" className="fileField" id="formPhone" />
          </div>
        </div>
        <div className="inputField">
          <div className="left">
            <div id="leftTitle">Group</div>
          </div>
          <div className="right">
            <select id="usersField" name="users">
              <option value="">Select Group</option>
              <option value="Colleagues">Colleagues</option>
              <option value="Friends">Friends</option>
              <option value="Family">Family</option>
            </select>
          </div>
        </div>
        <input type="submit" className="submit" value="Create" />
      </form>
    </div>
  );
}

export default CreateContact;

import React from "react";
import { Link } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";

class Header extends React.Component {
  // handleSearch = () => {
  //   var searchedTerm = document.getElementById("searchBox").value;

  //   if (searchedTerm.length > 0) {
  //     loadContacts(searchedTerm);
  //   } else {
  //     alert("Please enter valid name");
  //     // searchList.classList.add("hide-search-list");
  //   }
  // };

  // loadContacts = (searchedTerm) => {
  //   const { list } = this.props.store.getState();
  //   console.log(list);

  // {list.map((contact) => (
  //   if(contact.name === searchedTerm){
  //     var contactListItem = document.createElement('div');
  //     contactListItem.dataset.id = contact.id;
  //     contactListItem.classList.add('search-list-item');
  //   }
  // };

  render() {
    return (
      <div className="header">
        <div className="header-bar">
          <div className="title">Recovero Test</div>

          <div className="search-bar">
            <input type="text" id="searchBox"></input>
          </div>
          <div className="search-icon" onClick={this.handleSearch}>
            <img src="https://cdn-icons-png.flaticon.com/128/151/151773.png" />
          </div>

          <Link to="/create-contact">
            <div className="create-button">
              <img src="https://cdn-icons-png.flaticon.com/128/2985/2985068.png" />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;

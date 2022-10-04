import React from "react";
import { results } from "../results/result.js";
import Header from "../components/Header";
import Contact from "../components/Contact";
import { renderContact } from "../actions/index.js";

class HomePage extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
      // console.log(store.flag);
      // console.log("state updated--> ", this.props.store.getState());
    });
    if (!store.getState().flag) {
      // console.log("-->", store.getState().flag);
      store.dispatch(renderContact(results));
    } else {
      // console.log(store.getState().flag);
      store.dispatch(renderContact(store.getState().list));
    }

    // console.log("state mounted -> ", this.props.store.getState());
  }

  render() {
    const { list } = this.props.store.getState();
    // console.log("state rendered ----> ", this.props.store.getState());

    return (
      <div>
        <Header props={this.props} />
        <div className="contact-list">
          {list.map((contact) => (
            <Contact
              contact={contact}
              key={contact.id}
              dispatch={this.props.store.dispatch}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;

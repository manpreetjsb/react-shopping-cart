import React from "react";
import { connect } from "react-redux";

const Header = ({ count }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <h2>Logo</h2>
      <div>Item in Cart : {count}</div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { count: state.totalItemInCart };
};

export default connect(mapStateToProps)(Header);

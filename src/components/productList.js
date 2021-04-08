import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Decrease, Increase, Init } from "../action/action";

const ProductList = ({ state, total, decrease, increase, init }) => {
  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Add To Cart</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.Name}</td>
                <td>€{item.Price}</td>
                <td className="input-group">
                  <button
                    type="button"
                    onClick={() => decrease(item.id)}
                    className="btn btn-danger primary"
                  >
                    -
                  </button>
                  <div style={{ width: "20px", textAlign: "center" }}>
                    {item.count}
                  </div>

                  <button
                    onClick={() => increase(item.id, item.count)}
                    type="button"
                    className="btn btn-primary "
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <th></th>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>€ {total}</strong>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  //console.log(state);
  return {
    state: state.products,
    totalItemInCart: state.totalItemInCart,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  //const { id } = ownProps;
  //console.log(ownProps);

  return {
    init: () => {
      dispatch(Init());
    },
    decrease: (id) => {
      dispatch(Decrease(id));
    },
    increase: (id) => {
      dispatch(Increase(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

import React from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE, TOTAL } from "../action";

const ProductList = ({ state, total, decrease, increase, count }) => {
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
                  <div>{count}</div>

                  <button
                    onClick={() => increase(item.id, count)}
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
  return {
    state: state.products,
    total: state.total,
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  //const { id } = ownProps;
  //console.log(ownProps);
  return {
    decrease: (id) => {
      dispatch({ type: DECREASE, payload: { id: id } });
    },
    increase: (id, count) => {
      dispatch({ type: INCREASE, payload: { id: id, count: count } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

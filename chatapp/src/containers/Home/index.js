import React from 'react';
import { connect } from 'react-redux';
import {set_data} from '../../store/action';
import './style.css';

class Home extends React.Component {
  render() {
      let user = {name: "bbh", email: "OwaisSandiyawala@gmail.com"}
    console.log(" Home Props => ", this.props)
    console.log("Users => ", this.props.users)
    console.log("abc => ", this.props.abc)
      return (
      <div>
        <h1>Home</h1>
        <button onClick={() => this.props.set_data(user)}>SET DATA</button>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
    users : state.users,
    abc: state.abc
})

 // action (is meh jo bhi property bnaty  props eh save hoti)
const mapDispatchToProps = (dispatch) => ({
    set_data : (data) => dispatch(set_data(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);

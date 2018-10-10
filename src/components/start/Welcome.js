import React, { Component } from 'React';
import Navbar from '../navbar/navbar';
import Login from "./component/Login/Login";
//import '../App.css';

class Welcome extends Component {
    state = {
      currentPage: "Welcome"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
      };
    
      handlePageRender = () => {
        if (this.state.currentPage === "Welcome") {
          return <Welcome/>
        } else {
          return <div>Error 404: Page not found</div>
        }
      };
    
      render() {
        return (
          <div>
            <Navbar
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            {this.handlePageRender()}
            />
            <Login/>
          </div>
        );
      }
    }
    
    export default Welcome;
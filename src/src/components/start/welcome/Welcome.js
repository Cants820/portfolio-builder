import React, { Component } from 'React';
import Login from "../login/Login";
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
              {this.state.currentPage}
              {this.handlePageChange}
            {this.handlePageRender()}
            <html>
              <center>
              <h3>
                Welcome to the Portfolio Building and Modeling application.  Please log in below.
              </h3>
              </center>
              <Login/>
            </html>
          </div>
        );
      }
    }
    
    ComponentDidMount();
    
    export default Welcome;
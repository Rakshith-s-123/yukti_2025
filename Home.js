import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="header">
          <div className="header-text">
            <h1>Partner with Potato at 0% commission for the 1st Day!</h1>
            <p>
              And get ads worth INR 1500. Valid for new restaurant partners in
              select cities.
            </p>
            <div className="buttons">
              <NavLink
                to="/Restaurant/register"
                className="register-btn"
                type="text"
              >
                Register your restaurant
              </NavLink>
              <NavLink className="view-btn" to="/Restaurant/login" type="text">
                View your existing restaurants
              </NavLink>
            </div>
            <p className="contact">Need help? Contact +91 97-38-38-38-38</p>
          </div>
        </div>
        <div className="requirements">
          <h2>Get started with online ordering</h2>
          <p>Please keep the documents ready for a smooth signup</p>
          <div className="documentList">
            <div>
              <ul>
                <li>FSSAI license copy</li>
                <li>PAN card copy</li>
                <li>Regular GSTIN</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Bank account details</li>
                <li>Your restaurant menu</li>
                <li>Dish images for top 5 items</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="whyPotato">
        <div className="potatoDesc">
          <h1>Why Potato?</h1>
          <div className="features">
            <div className="feature">
              <h2>Deliver your way</h2>
              <p>
                Our offerings are flexible so you can customize them to your
                needs. Get started with your delivery people or connect with
                delivery people through the Uber platform.
              </p>
            </div>
            <div className="feature">
              <h2>Boost your visibility</h2>
              <p>
                Stand out with in-app marketing to reach even more customers and
                increase sales.
              </p>
            </div>
            <div className="feature">
              <h2>Connect with customers</h2>
              <p>
                Turn customers into regulars with actionable data insights,
                respond to reviews or offer a loyalty program.
              </p>
            </div>
          </div>
        </div>
        <div className="manage-ease">
          <div>
            <h2>Manage it all with ease</h2>
            <p>
              Orders can run smoothly with Uber Eats restaurant software,
              flexible integration options, and support when you need it.
            </p>
          </div>
          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_821,h_463/v1622579137/assets/98/1514ce-c432-4b28-be66-ee6dad37f9f1/original/20190318_UberEats_%28c%29AudreyMa_0452.jpg"
              alt="Manage it all with ease"
            />
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="home1">
        <h1>How Tomato works for restaurant partners</h1>
        <div className="steps">
          <div className="step">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_450,h_300/v1622579235/assets/3c/3f70e6-bd04-495f-84d8-f7288ad01cb7/original/CustomersOrder.svg"
              alt="Customers order"
            />
            <h2>Customers order</h2>
            <p>
              A customer finds your restaurant and places an order through the
              Tomato app.
            </p>
          </div>
          <div className="step">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_450,h_300/v1622579254/assets/f8/3a023b-d455-4aab-97a0-12bc3026cebf/original/YouPrepare.svg"
              alt="You prepare"
            />
            <h2>You prepare</h2>
            <p>Your restaurant accepts and prepares the order.</p>
          </div>
          <div className="step">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_450,h_300/v1622579274/assets/61/94ae40-5638-4fb7-88d2-94178d4d3eba/original/DeliveryPeopleArrive.svg"
              alt="Delivery partners arrive"
            />
            <h2>Delivery partners arrive</h2>
            <p>
              Delivery people using the Tomato platform pick up the order from
              your restaurant, then deliver it to the customer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

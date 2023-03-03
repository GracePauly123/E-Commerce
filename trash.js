// css Selection
// css section
//   #divNav {
//   display: block;
// }
// header {
//   background-color: #d2001a;
//   padding-top: 1rem;
//   height: 5rem;
// }

// .icon {
//   width: 20%;
//   padding-top: 20px;
//   margin-left: 10px;
// }
// /* .container {
//   background-color: antiquewhite;
// } */
// #searchText {
//   width: 30rem;
//   height: 1.5rem;
//   border-radius: 40px;
//   border: 1px solid #d2001a;
//   background-color: antiquewhite;
//   margin-left: 70px;
//   text-align: center;
// }
// #namePic {
//   width: 30%;
//   margin-left: 15px;
//   padding-top: 20px;
// }
// #signUpBtn:hover {
//   border-color: antiquewhite;
//   font-weight: bold;
// }

// #signUpBtn {
//   float: right;
//   margin-right: 10px;
//   width: 5rem;
//   height: 2rem;
//   border-radius: 40px;
//   background-color: antiquewhite;
//   margin-top: -2px;
//   border: 1px solid #d2001a;
// }

// #cart {
//   float: right;
//   width: 20%;
//   padding-right: 0px;
//   margin-right: 5px;
// }

// .btnCart {
//   float: right;
//   padding-top: 34px;
// }

// li {
//   list-style: none;
//   display: inline;
//   padding-right: 2rem;
//   padding-left: 2rem;

//   color: antiquewhite;
// }
// header div {
//   display: inline-block;
// }
// .divIcon {
//   width: 25%;
//   margin-top: -20px;
// }
// .divNav {
//   width: 60%;
// }
// #cart:hover {
//   width: 21%;
// }
// .btnCart {
//   width: 10%;
//   margin-top: -20px;
// }
// li:hover {
//   background-color: antiquewhite;
//   border-radius: 40px;
//   color: #d2001a;
//   font-weight: bold;
// }
  


<header>
  <div className="divIcon">
    <img className="icon" src="/images/fl.jpeg" alt="img"></img>
    <img id="namePic" src="/images/name.png" alt="img"></img>
  </div>
  
  
  <div className="divNav">
    <input type="text" id="searchText" placeholder="Search" />
    <ul>
      <li>Formal Suits</li>
      <li>Dress</li>
      <li>Winter Wear</li>
      <li>Clearance</li>
    </ul>
  </div>
  <div className="btnCart">
    <img id="cart" src="/images/cart.png"></img>
    <button id="signUpBtn">Signup</button>
  </div>
</header>;

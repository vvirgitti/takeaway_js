<h1>Takeaway challenge</h1>

<h2> Implement the following functionality:</h2>
  <ul>
    <li> List of dishes with prices </li>
    <li> Placing the order by giving the list of dishes, their quantities and a number that should be the exact total. If the sum is not correct the method should raise an error, otherwise the customer is sent a text saying that the order was placed successfully and that it will be delivered 1 hour from now, e.g. "Thank you! Your order was placed and will be delivered before 18:52". </li>
  </ul>

<h3> Technologies used: </h3>
  <ul>
    <li> Javascript </li>
    <li> Jquery </li>
    <li> Angular </li>
    <li> Mungo DB </li>
    <li> Bootstrap </li>
  </ul>

  <h3> Tests frameworks: </h3>
    <ul>
      <li> Jasmine </li>
      <li> Protractor </li>
    </ul>

<h3> CRC </h3>

<h4>Class Dish:</h4>
  <ul>
    <li> has a name </li>
    <li> has a price </li>
  </ul>

<h4>Class Menu:</h4>
  <ul>
    <li> can add a dish </li>
    <li> can remove a dish </li>
    <li> has a list of dishes </li>
  </ul>

<h4>Class Order Line:</h4>
  <ul>
    <li> knows quantities ordered for each dish </li>
    <li> can calculate the total price for the order </li>
    <li> can add the taxes </li>

<h4>Class Confirmation order:</h4>
  <ul>
    <li> can send a confirmation sms with the approximate delivery time </li>
  </ul>

  <h4> Class Customer:</h4>
    <ul>
      <li> has a login </li>
      <li> has a password </li>
      <has a mobile number </li>
    </ul>

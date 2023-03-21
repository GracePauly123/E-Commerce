import {Link, useLocation} from 'react-router-dom';
function Signup() {
  const {search} = useLocation();
  const redirectInUrl= new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl? redirectInUrl : '/';
  return (
    
    
    <div className="imgFormposition">
        
      <img class="mb-4" src="../images/fashionCarousel.jpg" alt="" width="72" height="57" />

      <form>
        <h1 class=" mb-3  font-color form-size">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control margin-box"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control margin-box"
            id="floatingPassword"
            placeholder="Password"
            required
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3 font-color">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <div>
        <button class="w-30 btn btn-lg  btn-color font-color btn-size" type="submit">
          Login
        </button>
        <p className='font-color'>New customer?{' '} Create an account <Link to={'/signup?redirect=${redirect}'}>here</Link></p>
        </div>
      </form>
      
    </div>
  );
}
export default Signup;

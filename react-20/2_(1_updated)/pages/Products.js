// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Products = () => {

  // version 5
  // const history  = useHistory();
  // history.push();
  // history.replace();

  // version 6
  // const navigate = useNavigate();
  // navigate('/welcome', {replace: true});
  // navigate(-1);    // to go 1 page backward

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>
            A Book
          </Link>
        </li>
        <li>
          <Link to='/products/p2'>
            A Carpet
          </Link>
        </li>
        <li>
          <Link to='/products/p3'>
            An Online Course
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;

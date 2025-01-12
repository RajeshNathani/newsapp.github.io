import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">ABC News</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link href='/'><a className="nav-link">Home</a></Link>
      </li>
      <li className="nav-item">
        <Link href='/About'><a className="nav-link">About</a></Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
}

export default Navbar;

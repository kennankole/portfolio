import logo from '../cs-education.jpg';

const Home = () => (
  <main>
    <div className="main-window">
      <h3>Hello and welcome to my page</h3>
      <div className="home-container">
        <div className="home-text">
          <p>
            Hi 👋,
            My name is
            Pavan MG
            I build things for web
          </p>
        </div>
        <div className="home-avatar">
          <img src={logo} alt="profile-pic" height={150} width={150} />
        </div>
      </div>
    </div>
  </main>
);

export default Home;

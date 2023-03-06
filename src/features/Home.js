import profile from '../images/profile-pic.png';

const Home = () => (
  <main>
    <div className="flex justify-evenly m-8 main-page">
      <div className="flex items-center py-10">
        <p className="home-para">
          Hi 👋,
          {' '}
          <br />
          My name is
          {' '}
          <br />
          Omondi Kennedy
          {' '}
          <br />
          I build things for web
        </p>
      </div>
      <div className="flex items-center">
        <img src={profile} alt="profile-pic" className="image flex items-center" />
      </div>
    </div>
  </main>
);

export default Home;

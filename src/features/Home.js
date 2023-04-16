import profile from '../images/profile-pic.png';

const Home = () => (
  <main className="flex justify-around items-center p-10">
    <div className="flex w-1/2">
      <p className="home-para">
        Hi 👋,
        {' '}
        <br />
        My name is
        {' '}
        <br />
        Obwombe Kennedy
        {' '}
        <br />
        I build things for web
      </p>
    </div>
    <div className="flex items-center p-10 justify-end min-[768px]:max-w-[100%] max-[600px]:max-w-[50%]">
      <img src={profile} alt="profile-pic" className="max-[600px]:max-w-[70%] min-[600px]:max-w-[100%]" />
    </div>
  </main>
);

export default Home;

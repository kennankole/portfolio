import profile from '../images/profile-pic.png';

const Home = () => (
  <main>
    <div className="flex justify-around m-10 hello">
      <div className="flex items-center">
        <p className="font-bold max-[600px]:text-[15px] min-[600px]:text-[35px] min-[768px]:text-[40px]">
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
      <div className="flex items-center p-10 justify-end min-[768px]:max-w-[100%] max-[600px]:max-w-[55%]">
        <img src={profile} alt="profile-pic" className="max-w-[100%]" />
      </div>
    </div>
  </main>
);

export default Home;

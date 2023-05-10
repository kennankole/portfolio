import ContactForm from './contact/ContactForm';

const Home = () => (
  <main className="flex flex-wrap justify-around items-center">
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
      <ContactForm />
    </div>
  </main>
);

export default Home;

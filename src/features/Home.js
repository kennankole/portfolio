import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import profile from '../images/profile-pic.png';

const Home = () => (
  <main>
    <section className="flex justify-around items-center home-container m-10">
      <div className="home-para">
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
      <div className="flex items-center p-10 justify-end min-[768px]:max-w-[100%] max-[600px]:max-w-[50%]">
        <img src={profile} alt="profile-pic" className="max-[600px]:max-w-[70%] min-[600px]:max-w-[100%]" />
      </div>
    </section>
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="/img/blog.jpg"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to Naviglio where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>
  </main>
);

export default Home;

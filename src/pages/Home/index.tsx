import { ToastContainer } from 'react-toastify';

import Header from '../../Components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;

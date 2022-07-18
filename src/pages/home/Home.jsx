import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table';

const Home = () => {


  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type="user" amount={1000} />
          <Widget type="order" amount={1000} />
          <Widget type="earning" amount={1000} />
          <Widget type="balance" amount={1000} />
        </div>
      </div>

    </div>
  )
}

export default Home
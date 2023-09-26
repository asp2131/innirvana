import Progressbar from "../Progress";
import Stopwatch from "../StopWatch";

const Dashboard = () => {
  return (
    <div className="dash">
      {/* <Stopwatch /> */}
      <section className="dash-card bg-white"></section>
      <section className="dash-card bg-white"></section>
      <section className="dash-card bg-white"></section>
      <section className="dash-card hidden bg-white lg:block"></section>
      <section className="dash-card hidden bg-white lg:block"></section>
    </div>
  );
};

export default Dashboard;

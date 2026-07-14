import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardBox from "../features/dashboard/DashboardBox";
import DurationChart from "../features/dashboard/DurationChart";
import SalesChart from "../features/dashboard/SalesChart";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout>
        <DashboardBox />
        <DashboardBox />
        <DashboardBox />
        <DashboardBox />
        <DashboardBox style={{ gridColumn: "1 / span 2" }} />
        <DurationChart />
        <SalesChart />
      </DashboardLayout>
    </>
  );
}

export default Dashboard;

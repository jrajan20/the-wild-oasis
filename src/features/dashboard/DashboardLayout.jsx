import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout({ children }) {
  const { bookings, isLoading: isLoadingBookings, numDays } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoadingStays } = useRecentStays();
  
  console.log({ bookings, isLoadingBookings, numDays });
  console.log({ stays, confirmedStays, isLoadingStays });

  return <StyledDashboardLayout>{children}</StyledDashboardLayout>;
}

export default DashboardLayout;

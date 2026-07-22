import { useSearchParams } from "react-router-dom";
import { useCabins } from "./useCabins";
import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import { CABIN_PAGE_SIZE } from "../../utils/constants";

function CabinTable() {
  const { cabins, isLoading, error } = useCabins();
  const [searchParams] = useSearchParams();

  if (error) {
    return <div>Error loading cabins</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  const filterValue = searchParams.get("discount") || "all";
  const filteredCabins =
    filterValue === "with-discount"
      ? cabins.filter((cabin) => cabin.discount > 0)
      : filterValue === "no-discount"
      ? cabins.filter((cabin) => cabin.discount === 0)
      : cabins;

  const sortByValue = searchParams.get("sortBy") || "name-asc";
  const [sortField, sortDirection] = sortByValue.split("-");
  const modifier = sortDirection === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.slice().sort((a, b) =>
    typeof a[sortField] === "string"
      ? a[sortField].localeCompare(b[sortField]) * modifier
      : (a[sortField] - b[sortField]) * modifier
  );

  // Pagination
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const count = sortedCabins.length;
  const from = (currentPage - 1) * CABIN_PAGE_SIZE;
  const to = from + CABIN_PAGE_SIZE;
  const paginatedCabins = sortedCabins.slice(from, to);

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={paginatedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
        <Table.Footer>
          <Pagination count={count} pageSize={CABIN_PAGE_SIZE} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CabinTable;

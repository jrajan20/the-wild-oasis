import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  useEffect(() => {
    const fetchCabins = async () => {
      const cabins = await getCabins();
      console.log('Cabins data:', cabins);
    };

    fetchCabins();
  }, []);
  return (
    
      <div>
        <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    
      
    </Row>
    <Row>
      <CabinTable />
      <AddCabin />
    </Row>
     
      </div>
  );
}

export default Cabins;

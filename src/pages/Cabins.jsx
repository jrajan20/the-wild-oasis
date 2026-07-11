import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  
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
       <Button onClick={() => setShowForm(!showForm)}>Add new cabin</Button>
        {showForm && <CreateCabinForm />}
    </Row>
     
      </div>
  );
}

export default Cabins;

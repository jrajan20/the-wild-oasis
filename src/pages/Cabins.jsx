import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    const fetchCabins = async () => {
      const cabins = await getCabins();
      console.log('Cabins data:', cabins);
    };

    fetchCabins();
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://wtcsavzcoikhamnxuugl.supabase.co/storage/v1/object/public/cabin-images/cabin-005.jpg" alt="Cabin" />
      
    </Row>
  );
}

export default Cabins;

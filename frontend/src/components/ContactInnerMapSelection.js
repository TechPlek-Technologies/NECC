import ContactInnerMapSection1 from "./ContactInnerMapSection1";
import ContactInnerMapSection2 from "./ContactInnerMapSection2";

const ContactInnerMapSelection=({data,map,filteredData, setMap,setTargetid,targetid})=>{
return(
    <>

      <ContactInnerMapSection1 data={data} map={map} setMap={setMap} targetid={targetid} setTargetid={setTargetid}/>
      <ContactInnerMapSection2 map={map} filteredData={filteredData} />
    </>
)
}

export default ContactInnerMapSelection;
const CompositionInner = ({id}) => {
    const data2 = [
      {
        id: 1,
        name: " Mr. Sunil Kumar Jain (Chairman)",
        eventID: 1,
      },
      {
        id: 2,
        name: "Mr. Utsav Jain (Member)",
        eventID: 1,
      },
      {
        id: 3,
        name: "Mr. Shyam Lal Yadav (Executive Member)",
        eventID: 1,
      },
      {
        id: 4,
        name: "Mr. Vinod Nair (Executive Member)",
        eventID: 1,
      },
    ];
    return (
      <div className='row'>
      <div className='col-lg-12 align-self-center list-Investors'>
        <ul className=' list-inner-wrap list-Investors1' >
        {data2.map((item) => (
          <li>
          {item.name}{" "}
          </li>
            ))}
        </ul>
      </div>
    </div>
    );
  };
  
  export default CompositionInner;
  
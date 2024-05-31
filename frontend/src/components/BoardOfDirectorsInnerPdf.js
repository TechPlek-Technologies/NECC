const DirectorComponent = ({ id }) => {
    const boardDirector = [
        {
              serial: 1,
              name: "Mr. Jaswant Rai Jain",
              designation: "123123",
              summary: "A Graduate in arts from Delhi University and Masters in Arts from Rajasthan University",
              pageID: 1,
              description: "<p>sdf d ag</p><ul><li>ewrqwer</li><li>1231</li><li><br></li></ul>"
          
        },
      ];
    return (
      <div>
        {boardDirector.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((director) => (
          <div key={director.id} className="service-details-wrap">
            <h4 className="subtitle CorporateInformation1">{director.name}</h4>
            <div dangerouslySetInnerHTML={{ __html: director.description }} />
          </div>
        ))}
      </div>
    );
  };

export default DirectorComponent;

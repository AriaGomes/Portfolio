import Particle from "../Particle";

export default function PageNotFound() {
  return (
	<><Particle /><div className="container" style={{ paddingTop: '100px', height: '95vh' }}>

		  <div className="row">
			  <div className="col-md-12">
				  <h1 style={{ color: 'white' }}>Page Not Found</h1>
				  <p style={{ color: 'white' }}>
					  Sorry, the page you are looking for does not exist.
				  </p>
			  </div>
		  </div>
	  </div></>
  );
}
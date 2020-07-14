import React from "react";
import GoogleMapReact from "google-map-react";
import Footer from "../component/Footer";
function NosCenter() {
  return (
    <div>
      <div className="mt-8">
        <div style={{ height: "90vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyC9XbQSYudkiVbjy7ZRYc_ju7wq4zHIjuQ",
            }}
            defaultCenter={{ lat: 36.87017, lng: 10.311069 }}
            defaultZoom={15}
          >
            {/* <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            /> */}
          </GoogleMapReact>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default NosCenter;

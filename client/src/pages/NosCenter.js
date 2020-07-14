import React from "react";
import GoogleMapReact from "google-map-react";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
function NosCenter() {
  const AnyReactComponent = () => (
    <div>
      <FontAwesomeIcon size="9x" color={"red"} icon={faMapPin} />
    </div>
  );
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
            mark
          >
            <AnyReactComponent lat={36.87017} lng={10.311069} />
          </GoogleMapReact>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default NosCenter;

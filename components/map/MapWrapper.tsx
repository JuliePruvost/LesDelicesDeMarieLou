import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "./Map";
import Marker from "./MapMarker";

export default function MapWrapper({position, zoom}: {position: google.maps.LatLng|null|google.maps.LatLngLiteral, zoom: number}) {
    return (
        <Wrapper apiKey={"AIzaSyBJHPDfhvexYER3fnLPq3pOZZhYgetU8K"}>
            <Map center={position} zoom={zoom} style={{ flexGrow: "1", height: "100%" }}>
                <Marker position={position} />
            </Map>
        </Wrapper>
    );
}


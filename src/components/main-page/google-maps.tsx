"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

import { TISSPosition } from "@/schemas/iss-position.schema";

interface IGoogleMapsProps {
  ISSPosition: TISSPosition;
}

export function GoogleMaps({ ISSPosition }: IGoogleMapsProps) {
  const mapFocus = {
    lat: Number(ISSPosition.latitude),
    lng: Number(ISSPosition.longitude),
  };
  console.log(mapFocus);
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div className="max-xl:col-span-2 max-xl:h-[600px] max-lg:col-span-1">
        <Map
          reuseMaps={true}
          defaultZoom={4}
          defaultCenter={{ lat: mapFocus.lat, lng: mapFocus.lng }}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          <AdvancedMarker position={mapFocus} />
        </Map>
      </div>
    </APIProvider>
  );
}

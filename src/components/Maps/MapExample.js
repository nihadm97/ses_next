import React, { useEffect, useRef } from "react";

function MapExample() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        const lat = 43.85435222461072; // Use number instead of string
        const lng = 18.393654375636082; // Use number instead of string
        const myLatlng = new window.google.maps.LatLng(lat, lng);
        const mapOptions = {
          zoom: 18,
          center: myLatlng,
          scrollwheel: true,
          zoomControl: true,
          styles: [
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{ color: "#444444" }],
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [{ color: "#f2f2f2" }],
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [{ visibility: "on" }],
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [{ saturation: -100 }, { lightness: 45 }],
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [{ visibility: "simplified" }],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [{ visibility: "on" }],
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [{ color: "#4299e1" }, { visibility: "on" }],
            },
          ],
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);

        const marker = new window.google.maps.Marker({
          position: myLatlng,
          map: map,
          animation: window.google.maps.Animation.DROP,
          title: "SREDNJA EKONOMSKA ŠKOLA",
        });

        const contentString =
          '<div class="info-window-content"><h2>SREDNJA EKONOMSKA ŠKOLA</h2>' +
          "<p>Škola topline, sigurnosti i odgovornosti</p></div>";

        const infowindow = new window.google.maps.InfoWindow({
          content: contentString,
        });

        window.google.maps.event.addListener(marker, "click", function () {
          infowindow.open(map, marker);
        });
      }
    };

    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`; // Replace with your API key
    script.async = true;
    script.defer = true;
    script.onload = loadGoogleMaps;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full rounded h-600-px">
      <div className="rounded h-full" ref={mapRef} />
    </div>
  );
}

export default MapExample;

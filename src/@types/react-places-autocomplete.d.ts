declare module 'react-places-autocomplete' {
  export function geocodeByAddress(address: string):
    Promise<google.maps.GeocoderResult[]>;

  export function getLatLng(result: google.maps.GeocoderResult):
    Promise<{ lat: number, lng: number }>;


  export default class PlacesAutocomplete extends React.Component<{
    onChange: Object;
    value: string;
    onSelect: Object;
    onError: Object;
    shouldFetchSuggestions: boolean;
  }, any> { }
}

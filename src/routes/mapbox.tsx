import axios from "axios";
const getDriveDist = (lat1:number, long1:number, lat2:number,long2:number,setDistance: (arg: any) => any) => {
const link = "https://api.mapbox.com/directions/v5/mapbox/driving/"+long1+","+lat1+";"+long2+','+lat1+"?approaches=unrestricted;curb&access_token=pk.eyJ1IjoiYmFuYW5hYXBwb3JnIiwiYSI6ImNrY3R4eW5tdjFreWwycm0xOXpteWNwa3EifQ.Y5o31sEmabfFzCDHQfqrEg"
//reference api get request "https://api.mapbox.com/directions/v5/mapbox/driving/-97.435727,38.885254;-97.437057,38.915613?approaches=unrestricted;curb&access_token=pk.eyJ1IjoiYmFuYW5hYXBwb3JnIiwiYSI6ImNrY3R4eW5tdjFreWwycm0xOXpteWNwa3EifQ.Y5o31sEmabfFzCDHQfqrEg"
axios
    .get(
      link
    )
    .then(response => {
      setDistance(response.data.routes[0].distance/1609);
    });
};
export default getDriveDist;
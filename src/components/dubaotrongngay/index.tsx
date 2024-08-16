import { useEffect } from "react";

function Test1() {
  useEffect(() => {
    fetch(
      `api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=6e510dcdf8fd0c473c4d0a290d0ce37c`
    )
      .then((response) => response.json())
      .then((data) => console.log(data + "dc roi"))
      .catch((error) => console.error("Error:", error));
  }, []);
  return <>test1</>;
}
export default Test1;

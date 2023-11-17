export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "ab4031da89msh34b304d29c01642p1cf8a4jsnec26dec56220",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}

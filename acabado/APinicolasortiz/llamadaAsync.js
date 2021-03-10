btn = document.querySelector("#btnMostrar");
async function getData() {
  response = await axios.get(
    "https://api.nasa.gov/techport/api/projects/17792?api_key=DEMO_KEY"
  );
  console.log(response);
}
btn.onclick = getData;
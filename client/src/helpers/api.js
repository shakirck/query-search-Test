const APIurl = "http://localhost:8000";

export async function listQueries() {
  const response = await fetch(`${APIurl}/api/questions`);
  return response.json();
}

export async function addQuery(queryData) {
  const url = `${APIurl}/api/create`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(queryData),
  });

  return response.json();
}

export async function searchQuery(searchText) {
  const url = `${APIurl}/api/search`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(searchText),
  });

  return response.json();
}

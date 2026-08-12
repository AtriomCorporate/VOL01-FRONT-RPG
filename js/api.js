const API_URL = "http://localhost:3000";

function getToken() {
  return localStorage.getItem("accessToken");
}
function getHeaders() {
  const headers = {
    "Content-Type": "application/json", // "Chave", "valor".
  };

  const token = getToken();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export async function apiGet(endpoint) {
  try {
    const response = await fetch(API_URL + endpoint, {
      method: "GET",
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar dados.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function apiPost(endpoint, data) {
  try {
    const response = await fetch(API_URL + endpoint, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function apiPatch(endpoint, data) {
  try {
    const response = await fetch(API_URL + endpoint, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function apiDelete(endpoint) {
  try {
    const response = await fetch(API_URL + endpoint, {
      method: "DELETE",
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error("Erro ao excluir.");
    }

    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//login/logout -? username diaplay and get token and clear token

export const getToken = () => localStorage.getItem("token");

export const getUser = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

// data = { token, user, role? }
export const setAuth = (data) => {
  if (data?.token) localStorage.setItem("token", data.token);
  if (data?.user) localStorage.setItem("user", JSON.stringify(data.user));
  if (data?.role) localStorage.setItem("role", data.role); // optional

  window.dispatchEvent(new Event("auth:changed"));
};

export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("role");
  window.dispatchEvent(new Event("auth:changed"));
};


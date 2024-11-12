import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface LoginData {
  username: string;
  password: string;
}

class LoginService {
  private baseUrl = BASE_URL;

  async login(loginData: LoginData) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/admin/login`,
        loginData
      );

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data;
    } catch (error) {
      console.error("Login failed", error);
      throw new Error(
        "Login gagal. Silakan periksa username dan password Anda."
      );
    }
  }

  logout() {
    localStorage.removeItem("token");
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }
}

export default new LoginService();

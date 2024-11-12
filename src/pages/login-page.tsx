"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "@/services/login-service";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Username dan password harus diisi.");
      return;
    }

    try {
      const response = await loginService.login({ username, password });
      if (response) {
        navigate("/");
      }
    } catch (err) {
      setError("Login gagal. Silakan periksa username dan password Anda.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-white">
            Login Admin
          </CardTitle>
          <CardDescription className="text-center text-gray-400">
            Masuk ke panel admin CinemaPlex
          </CardDescription>
        </CardHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">
                Username
              </Label>
              <div className="relative">
                <Input
                  id="username"
                  type="text"
                  placeholder="Masukkan username"
                  className="bg-gray-700 border-gray-600 text-white pl-10"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  className="bg-gray-700 border-gray-600 text-white pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                  aria-label={
                    showPassword ? "Sembunyikan password" : "Tampilkan password"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              Masuk
            </Button>
            <div className="text-sm text-center text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">
                Kembali ke Beranda
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

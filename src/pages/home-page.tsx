import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Film, Popcorn, Ticket, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/form");
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cinemart</h1>
        </nav>
      </header>
      <section className="container mx-auto py-20 px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">Selamat Datang di Cinemart</h2>
        <p className="text-xl mb-8">
          Nikmati pengalaman menonton film terbaik dengan teknologi canggih dan
          kenyamanan maksimal.
        </p>
        <Button
          onClick={handleNavigate}
          size="lg"
          className="bg-red-600 hover:bg-red-700"
        >
          Pesan Tiket
        </Button>
      </section>

      <section className="container mx-auto py-20 px-4">
        <h3 className="text-3xl font-bold text-center mb-12">
          Fitur Unggulan Kami
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Film className="h-10 w-10 text-red-500" />}
            title="Teknologi Layar Terkini"
            description="Nikmati film dengan kualitas gambar yang luar biasa menggunakan teknologi layar terbaru."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-red-500" />}
            title="Kursi Premium"
            description="Bersantailah di kursi premium kami yang dirancang untuk kenyamanan maksimal."
          />
          <FeatureCard
            icon={<Popcorn className="h-10 w-10 text-red-500" />}
            title="Makanan & Minuman"
            description="Nikmati berbagai pilihan makanan dan minuman lezat di food court kami."
          />
          <FeatureCard
            icon={<Ticket className="h-10 w-10 text-red-500" />}
            title="Pemesanan Online"
            description="Pesan tiket dengan mudah melalui sistem pemesanan online kami yang praktis."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Cinemart. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

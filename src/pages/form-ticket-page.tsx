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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Film } from "lucide-react";
import { format } from "date-fns";
import { postData } from "@/services/order-service";
import { useNavigate } from "react-router-dom";

export default function FormTicket() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movie, setMovie] = useState("");
  const [seat, setSeat] = useState("");
  const [date, setDate] = useState<Date>();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async () => {
    try {
      const formattedDate = date ? format(date, "yyyy-MM-dd") : null;
      const bookingData = {
        name,
        email,
        movie,
        date: formattedDate,
        seat,
      };
      await postData(bookingData);
      setShowPopup(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4">
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Tiket Berhasil Dipesan!</h2>
            <p className="mt-2">
              Terima kasih telah memesan tiket. Anda akan diarahkan ke homepage.
            </p>
          </div>
        </div>
      )}
      <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Film className="h-6 w-6 text-red-500" />
            Pemesanan Tiket Film
          </CardTitle>
          <CardDescription>
            Isi form di bawah ini untuk memesan tiket film Anda
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Masukkan nama lengkap Anda"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Masukkan alamat email Anda"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="movie">Pilih Film</Label>
            <Select onValueChange={(value) => setMovie(value)}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Pilih film yang ingin ditonton" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 text-white">
                <SelectItem value="movie1">Avengers: Endgame</SelectItem>
                <SelectItem value="movie2">Inception</SelectItem>
                <SelectItem value="movie3">The Dark Knight</SelectItem>
                <SelectItem value="movie4">Parasite</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Tanggal Menonton</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-gray-700 border-gray-600 text-white"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-gray-700 border-gray-600">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="bg-gray-700 text-white"
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="seats">Jumlah Kursi</Label>
            <Select onValueChange={(value) => setSeat(value)}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Pilih jumlah kursi" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 text-white">
                <SelectItem value="1">1 Kursi</SelectItem>
                <SelectItem value="2">2 Kursi</SelectItem>
                <SelectItem value="3">3 Kursi</SelectItem>
                <SelectItem value="4">4 Kursi</SelectItem>
                <SelectItem value="5">5 Kursi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-red-600 hover:bg-red-700"
            onClick={handleSubmit}
          >
            Pesan Tiket
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

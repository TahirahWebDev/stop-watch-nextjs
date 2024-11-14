// src/app/page.tsx
import Stopwatch from "./components/Stopwatch";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <Stopwatch />
    </main>
  );
}

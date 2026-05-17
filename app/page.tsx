import Navbar from "./components/Navbar";

// wip — adding sections one by one
export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <Navbar />
      {/* placeholder so nav scroll logic has room to work */}
      <div className="flex items-center justify-center" style={{ height: "200vh", color: "var(--muted)" }}>
        <p className="mono text-sm">building... 🔧</p>
      </div>
    </main>
  );
}

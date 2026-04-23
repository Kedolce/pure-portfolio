function Navbar() {
  return (
    <nav className="fixed left-0 right-0 z-50 flex items-center justify-between max-w-4xl px-8 py-3 mx-auto text-white border rounded-full mix-blend-difference top-8 border-white/5 bg-black/20 backdrop-blur-md">
      
      <h1 className="text-sm font-black tracking-tighter uppercase transition duration-300 cursor-pointer hover:text-slate-400">
        Kadek.dev
      </h1>

      {/* List Menu: Ukuran text dikecilkan sedikit agar terkesan bersih */}
      <ul className="flex gap-2">
        {["Home", "About", "Projects", "Contacts"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="px-4 py-1.5 text-[11px] uppercase tracking-widest font-medium transition duration-300 rounded-full hover:bg-white/10 hover:text-slate-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

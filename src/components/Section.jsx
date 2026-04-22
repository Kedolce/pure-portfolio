function Section({ id, children }) {
  return (
    <section id={id} className="max-w-6xl px-10 py-20 mx-auto">
      {children}
    </section>
  );
}

export default Section;
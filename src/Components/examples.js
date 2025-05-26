export default function ScrollSection() {
  return (
    <div className=" bg-black text-center p-4 text-white">
      <h2 className="text-xl font-bold mb-4">Scrollable Content</h2>
      {[...Array(30)].map((_, i) => (
        <p key={i} className="mb-2">
          Line {i + 1}: This is some scrollable text inside a black background container.
        </p>
      ))}
    </div>
  );
}

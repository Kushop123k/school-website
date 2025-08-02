export default function Features() {
  const features = [
    { name: "Attendance + SMS", desc: "Notify parents instantly." },
    { name: "PDF Notes Upload", desc: "Upload and access notes easily." },
    { name: "Certificate Generator", desc: "Create certificates in one click." },
    { name: "Booking System", desc: "Slot-based class or PTM booking." },
    { name: "Admin Dashboard", desc: "Control everything securely." },
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">App Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{f.name}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

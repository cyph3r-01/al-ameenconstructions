export default function PageHero({ title, text }) {
  return (
    <section className="bg-primary-black text-white py-16 md:py-20 border-b-4 border-primary-orange">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl mb-4">{title}</h1>
        {text && <p className="text-lg text-gray-300">{text}</p>}
      </div>
    </section>
  )
}

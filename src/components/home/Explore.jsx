import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ icon, title, desc, linkText, route }) => (
  <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500 group">
    <div className="w-12 h-12 rounded-full flex items-center justify-center text-azul-acento mb-6 bg-primary/10 text-primary">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <h3 className="text-xl font-serif mb-4 text-texto-dark">{title}</h3>
    <p className="text-sm font-light text-black/50 leading-relaxed mb-6">{desc}</p>
    <Link to={route} className="text-primary cursor-pointer hover:underline underline-offset-4 text-xs tracking-widest uppercase font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out w-fit">
      {linkText} <span className="">→</span>
    </Link>
  </div>
);

function Explore() {
  return (
    <div className="px-8 py-16 bg-background-light flex gap-4 flex-col">
        <h1 className="font-serif text-3xl">Explore Our World</h1>
        <p className="font-light">Discover the process, view the results and start your own journey with us.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <Card icon="person" title="About the Artist" desc="Learn about the creative vision and the person behind the easel who brings portraits to life." linkText="Read More" route="/about" />
          <Card icon="image" title="Portfolio Gallery" desc="Browse the gallery of past commissions. See the details, the style, and the variety of subjects." linkText="View Gallery" route="/gallery" />
          <Card icon="shopping_bag" title="How to Order" desc="Simple steps to get your custom piece. From photo selection to the final reveal." linkText="Start Here" route="/order"/>
        </div>
    </div>
  )
}

export default Explore
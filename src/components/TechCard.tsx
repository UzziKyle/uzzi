export default function TechCard({ cardData }) {
  return (
    <div className="group bg-gray-50 relative h-60 rounded-2xl w-[90vw] md:w-[22.5vw] lg:w-[15vw] shadow-md hover:shadow-lg">
      <img
        src={cardData.image}
        className="absolute top-8 h-24 group-hover:-top-5 group-hover:h-32 ease-in-out duration-100 left-0 right-0 m-auto"
      />
      <div className="absolute bottom-8 text-center left-0 right-0 m-auto">
        <span className="block text-lg font-bold">{cardData.name}</span>
        <span className="block text-md">{cardData.description}</span>
      </div>
    </div>
  );
}

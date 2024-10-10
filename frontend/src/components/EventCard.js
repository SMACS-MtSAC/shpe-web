import Image from 'next/image';

export default function EventCard({ event }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:shadow-xl bg-white duration-300 ease-in-out" data-aos="fade-up">
      {/* Event Image */}
      <div className="relative h-48 w-full hover:scale-105 duration-300 ease-in-out">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Event Info */}
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2">{event.title}</div>
        <p className="text-gray-700 text-base mb-4">{event.description}</p>
        <p className="text-gray-500 text-sm">{new Date(event.date).toDateString()}</p>
      </div>
    </div>
  );
}

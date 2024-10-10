import Image from "next/image";
import EventCard from '../components/EventCard';

const events = [
  {
    image: '/images/yosemite.jpg',
    title: 'SHPE Club Meeting',
    description: 'Join us for our bi-weekly meeting to discuss upcoming events, workshops, and more!',
    date: '2024-10-12',
  },
  {
    image: '/images/yosemite.jpg',
    title: 'Resume Building Workshop',
    description: 'Learn how to create a resume that stands out from the crowd with tips from industry professionals.',
    date: '2024-10-15',
  },
  {
    image: '/images/yosemite.jpg',
    title: 'Speedrun Workshop',
    description: 'Learn how to do calculus and differential equation while sleeping.',
    date: '2024-10-15',
  },
  {
    image: '/images/yosemite.jpg',
    title: 'SHPE Club Meeting',
    description: 'Join us for our bi-weekly meeting to discuss upcoming events, workshops, and more!',
    date: '2024-10-12',
  },
  {
    image: '/images/yosemite.jpg',
    title: 'Resume Building Workshop',
    description: 'Learn how to create a resume that stands out from the crowd with tips from industry professionals.',
    date: '2024-10-15',
  },
  {
    image: '/images/yosemite.jpg',
    title: 'Speedrun Workshop',
    description: 'Learn how to do calculus and differential equation while sleeping.',
    date: '2024-10-15',
  },
  {
    image: '/images/yosemite.jpg',
    title: 'SHPE Club Meeting',
    description: 'Join us for our bi-weekly meeting to discuss upcoming events, workshops, and more!',
    date: '2024-10-12',
  },
  {
    image: '/images/yosemite.jpg',
    title: 'Resume Building Workshop',
    description: 'Learn how to create a resume that stands out from the crowd with tips from industry professionals.',
    date: '2024-10-15',
  },
  {
    image: '/images/yosemite.jpg',
    title: 'Speedrun Workshop',
    description: 'Learn how to do calculus and differential equation while sleeping.',
    date: '2024-10-15',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100 text-center pt-32">
      <div className="flex-grow flex flex-col items-center justify-center relative after:content-empty after:block after:h-24 after:w-full">
        <h1 className="text-9xl m-3 w-60"><img src = "/images/Logo_MtSAC_blk-Solid.png"></img></h1>
        <h1 className="text-3xl font-bold mb-4" data-aos="zoom-in">
          SHPE Club website is still under construction
        </h1>
        <p className="mt-12 mb-12 sm:w-1/2 md:w-4/5" data-aos="zoom-in">
          Welcome to SHPE, Society of Hispanic Professional Engineers! Let it be known that all are welcome here, especially folks interested in lifting up and supporting diversity in engineering and STEM at large. We're open to all students interested in helping create a positive environment where we can support one another in our academic and professional journeys, and beyond.
        </p>
        <p className="text-2xl" data-aos="zoom-in">
          Come join us on our{" "}
          <a
            href="https://discord.gg/ZsGcJjYjkW"
            target="_blank"
            className="text-blue-600 underline font-bold"
          >
            Discord
          </a>
        </p>
        <hr class="h-px my-24 bg-gray-200 border-0 dark:bg-gray-700 w-4/5"></hr>
        <div className="container mx-auto px-4 my-8 w-4/5">
          <h1 className="text-3xl font-bold mb-6 my-12">Upcoming Events</h1>
          {/* Responsive grid: 1 column on phone, 2 on iPad, and 3 on desktop */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>

      </div>

      <div className="flex justify-center mb-96 mt-40">
        <p className="text-lg mb-10">
          If you want to contribute and help in making the website, join our
          Discord or join{" "}
          <a
            href="https://discord.gg/yB4DGpH884"
            target="_blank"
            className="text-blue-500 underline"
          >
            SMACS Club Discord
          </a>
        </p>
      </div>
    </div>
  );
}

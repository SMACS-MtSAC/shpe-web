import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100 text-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-9xl">🚜</h1>
        <h1 className="text-3xl font-bold mb-4">
          SHPE Club website under construction
        </h1>
        <p className="text-2xl">
          Join our{" "}
          <a
            href="https://discord.gg/ZsGcJjYjkW"
            target="_blank"
            className="text-blue-600 underline font-bold"
          >
            Discord
          </a>
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <p className="text-lg">
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

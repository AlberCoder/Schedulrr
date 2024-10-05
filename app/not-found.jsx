export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="mt-4 text-gray-600 text-lg md:text-xl lg:text-2xl text-center mx-4">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a href="/" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 text-center">
        Go Back Home
      </a>
    </div>
  );
}


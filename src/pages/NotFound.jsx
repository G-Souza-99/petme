import { Button } from "../components/Button";

export function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-grow flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Error Code */}
          <h1 className="text-6xl md:text-8xl font-bold text-petmeOrange mb-6">404</h1>
          
          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to our happy pet community!
          </p>

          {/* Hero Image - Replace with your preferred dog image */}
          <div className="mb-10 max-w-lg mx-auto">
            <img
              src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&w=800&q=80"
              alt="Confused dog looking around"
              className="rounded-xl shadow-lg w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button href="/" variant="primary" className="px-8 py-4 text-lg">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

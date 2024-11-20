export default function BookingPage() {
    return (
      <div className="max-w-screen-lg mx-auto py-12">
        <h1 className="text-5xl font-bold mb-8">Book an Appointment</h1>
        <iframe
          src="https://calendly.com/your-calendly-link"
          width="100%"
          height="700px"
          frameBorder="0"
          className="rounded-lg"
        ></iframe>
      </div>
    );
  }

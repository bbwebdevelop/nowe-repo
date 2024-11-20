'use client';

import { useState } from "react";
import { services } from "@/app/data/services";

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Book an Appointment</h1>
      
      {/* Dropdown wyboru usługi */}
      <div className="mb-8">
        <label htmlFor="service" className="block text-lg font-medium mb-2">
          Select a Service
        </label>
        <select
          id="service"
          className="border p-2 w-full rounded"
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">-- Choose a Service --</option>
          {services.map((service) => (
            <option key={service.id} value={service.calendlyLink}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      {/* Kalendarz Calendly */}
      {selectedService && (
        <div className="mt-8">
          <iframe
            src={selectedService}
            width="100%"
            height="700px"
            frameBorder="0"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
}

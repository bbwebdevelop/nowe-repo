import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="max-w-screen-lg mx-auto py-12 text-center">
      <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
      <p className="mt-4">Thank you for your purchase.</p>
      <Link
        href="/shop"
        className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Shop
      </Link>
    </div>
  );
}

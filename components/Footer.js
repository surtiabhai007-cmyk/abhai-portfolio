export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Abhai Surti. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

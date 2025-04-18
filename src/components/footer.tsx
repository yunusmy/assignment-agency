export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Creative Agency</h3>
            <p className="text-gray-300">
              We help businesses grow with innovative digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-300 not-italic">
              123 Business Ave
              <br />
              City, State 10001
              <br />
              Email: info@creativeagency.com
              <br />
              Phone: (123) 456-7890
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Creative Agency. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

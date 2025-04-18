import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div
                  className={`relative h-64 rounded-lg overflow-hidden ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how we can help you achieve your goals
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

// Mock data
const services = [
  {
    title: "Web Design & Development",
    description:
      "We create beautiful, functional websites that represent your brand and drive conversions. Our responsive designs work perfectly on all devices.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-responsive development",
      "SEO-optimized structure",
      "Content management system",
      "Ongoing maintenance",
    ],
    image: "/assets/web-design.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Our comprehensive digital marketing strategies increase your online visibility and drive qualified traffic to your business.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing",
      "Email Marketing Campaigns",
      "Analytics & Reporting",
    ],
    image: "/assets/digital-marketing.jpg",
  },
  {
    title: "Branding & Identity",
    description:
      "We help you establish a strong brand identity that resonates with your target audience and differentiates you from competitors.",
    features: [
      "Logo & visual identity design",
      "Brand guidelines development",
      "Brand messaging strategy",
      "Print collateral design",
      "Brand positioning",
    ],
    image: "/assets/branding.png",
  },
];

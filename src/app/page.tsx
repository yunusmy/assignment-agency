import { Button } from "@/components/ui/button";
import { MegaphoneIcon, MonitorIcon, PaletteIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Innovative Digital Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We help businesses grow with cutting-edge digital strategies and
            creative solutions.
          </p>
          <div className="space-x-4">
            <Button asChild variant="secondary" className="text-blue-600">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Agency</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Creative Agency has been helping businesses of
                all sizes achieve their digital goals. Our team of experts
                combines creativity with technical expertise to deliver
                outstanding results.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in building long-term relationships with our clients
                and delivering solutions that drive real business value.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/team-meeting.jpg"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Mock data for services
const services = [
  {
    title: "Web Design",
    description:
      "Beautiful, responsive websites tailored to your brand and business needs.",
    icon: MonitorIcon,
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive strategies to increase your online presence and conversions.",
    icon: MegaphoneIcon,
  },
  {
    title: "Branding",
    description:
      "Create a strong brand identity that resonates with your target audience.",
    icon: PaletteIcon,
  },
];

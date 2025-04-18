import { LightbulbIcon, ShieldCheckIcon, TrophyIcon } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our Agency
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Learn about our story, values, and the team behind our success.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/office-space.jpg"
                alt="Our office"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015 by a group of passionate designers and
                developers, Creative Agency started as a small studio with big
                dreams. Over the years, we've grown into a full-service digital
                agency serving clients across multiple industries.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been marked by innovation, dedication, and a
                relentless focus on delivering exceptional results for our
                clients. We've had the privilege of working with startups,
                established businesses, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.position}</p>
                <p className="text-sm text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Mock data
const values = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries to deliver cutting-edge solutions.",
    icon: LightbulbIcon,
  },
  {
    title: "Integrity",
    description: "Honesty and transparency guide all our client relationships.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Excellence",
    description: "We strive for perfection in everything we deliver.",
    icon: TrophyIcon,
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    bio: "With over 15 years in the industry, Sarah leads our strategic vision.",
    image: "/team-member1.jpg",
  },
  {
    name: "Michael Chen",
    position: "Creative Director",
    bio: "Michael brings innovative design solutions to every project.",
    image: "/team-member2.jpg",
  },
  {
    name: "Emily Rodriguez",
    position: "Lead Developer",
    bio: "Emily ensures our technical solutions are robust and scalable.",
    image: "/team-member3.jpg",
  },
  {
    name: "David Kim",
    position: "Marketing Director",
    bio: "David crafts strategies that drive real business growth.",
    image: "/team-member4.jpg",
  },
];

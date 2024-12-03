import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <div className="dark:bg-[#2D3748] min-h-[600px] flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-navy-800 dark:text-gray-100 mb-4">
          Revolutionizing Power Line Health Monitoring
        </h1>
        <p className="text-xl text-navy-600 dark:dark:text-gray-100 mb-8">
          Monitor, Detect, and Prevent Defects in Power Lines with AI-powered
          Object Detection.
        </p>
        <div className="space-x-4">
          <Link
            href="/create-vault"
            className="hover:text-navy-600 dark:hover:dark:text-gray-100 transition"
          >
            Upload Image
          </Link>
          <button className="border-2 border-navy-500 text-navy-500 px-6 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

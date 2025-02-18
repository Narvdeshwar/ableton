import Image from "next/image";
import heroImage from "../assets/home/fronbanner.avif";

export default function Home() {
  return (
    <div className="main-container">
      {/* hero section */}
      <div className="hero-section">
        <Image src={heroImage} alt="hero-image" width={100} height={100} priority/>
      </div>
    </div>
  );
}

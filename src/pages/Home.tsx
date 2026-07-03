import { Hero } from "../components/Hero";
import { Boat } from "../components/Boat";
import { Location } from "../components/Location";
import { Captain } from "../components/Captain";
import { Booking } from "../components/Booking";
import { InstagramTicker } from "../components/InstagramTicker";

export function Home() {
  return (
    <>
      <Hero />
      <Boat />
      <Location />
      <Captain />
      <Booking />
      <InstagramTicker />
    </>
  );
}

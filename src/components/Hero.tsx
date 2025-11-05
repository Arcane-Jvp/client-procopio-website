import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="h-screen w-screen bg-[#8d0f0f] px-4">
      <Logo className="w-full h-full text-[#9f1313]" ariaLabel="Logo"/>
    </section>
  )
}

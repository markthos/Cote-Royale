import { FC } from "react";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FadeIn } from "@/components/Fadein";
import { Bounded } from "@/components/Bounded";
import { RevealText } from "@/components/RevealText";

gsap.registerPlugin(useGSAP,ScrollTrigger);
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      <FadeIn
        vars={{ scale: 1, opacity: .5 }}
        className=" absolute inset-0 scale-125 opacity-0">
        <PrismicNextImage
          field={slice.primary.image}
          alt=""
          priority
          fill
          className="object-cover" />
      </FadeIn>

      <div className="flex relative h-screen flex-col justify-center">
        <RevealText
          field={slice.primary.heading} 
          id="hero-heading" 
          className="max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl font-display"
          staggerAmount={.2}
          duration={1.7}
          as={"h1"}
        />

        <FadeIn
          vars={{delay: 1, duration: 1.3}}
          className="mt-6 max-w-md text-lg text-neutral-100 translate-y-8">
          <PrismicRichText field={slice.primary.body} />
        </FadeIn>

        <FadeIn
          vars={{delay: 1.7, duration: 1.1}}
          className="mt-8 transalte-y-5">
        {slice.primary.button.map((link) => (
          <PrismicNextLink
            key={link.key}
            field={link}
            className={clsx(
              "inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300",
              link.variant === "Secondary" ? "border border-white text-white hover:bg-white/20" :
                "bg-white text-black hover:bg-white/80",
              "w-fit"
            )}
          />  
        ))}
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default Hero;

import { FC } from "react";
import ImageCarousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

interface CarouselProps {
  imageSources: string[];
}

const responsive: ResponsiveType = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export const Carousel: FC<CarouselProps> = ({ imageSources }) => {
  return (
    <ImageCarousel responsive={responsive} ssr={true}>
      {imageSources.map((source, index) => (
        <div key={index} style={{ height: "190px", position: "relative" }}>
          <Image
            src={source}
            layout={"fill"}
            objectFit={"cover"}
            unoptimized={true}
            alt={"image"}
          />
        </div>
      ))}
    </ImageCarousel>
  );
};

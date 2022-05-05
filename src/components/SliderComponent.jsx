import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "https://pngimg.com/uploads/credit_card/credit_card_PNG78.png" },
  {
    url: "https://www.pngall.com/wp-content/uploads/2/Blue-Credit-Card-Transparent.png",
  },
  {
    url: "https://www.pngall.com/wp-content/uploads/2/Blue-Credit-Card-PNG-Picture.png",
  },
];

const SliderComponent = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default SliderComponent;

import watermarkImage from "@assets/IMG_8971_1766383047708.jpeg";

export default function Watermark() {
  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none opacity-70 hover:opacity-100 transition-opacity">
      <img 
        src={watermarkImage}
        alt="Studio Widmung"
        className="w-20 h-auto drop-shadow-lg"
      />
    </div>
  );
}

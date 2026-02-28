import { MoreHorizontal } from "lucide-react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    alt: "Shelf",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",
    alt: "Desk Setup",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
    alt: "Dining Room",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    alt: "Bedroom",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    alt: "Brick Corner",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800",
    alt: "Armchair",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    alt: "Side Tables",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800",
    alt: "Minimal Frame",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    alt: "Kitchen",
  },
];

export default function FuniroGallery() {
  return (
    <section className="funiro-section">
      <div className="funiro-header">
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </div>

      <div className="funiro-grid">
        {images.map((img, i) => (
          <div key={img.id} className={`funiro-item item-${i + 1}`}>
            <img src={img.src} alt={img.alt} />
            <div className="funiro-overlay">
              <MoreHorizontal color="white" size={150}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

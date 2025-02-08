"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    image:
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  },
  {
    id: 2,
    image:
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  },
  {
    id: 3,
    image:
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  },
  {
    id: 4,
    image:
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  },
  {
    id: 5,
    image:
      "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  },
  {
    id: 6,
    image:
      "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  },
  {
    id: 7,
    image:
      "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  },
];

const ModalImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
      {images.map((data) => (
        <div key={data.id} className="text-center">
          <button onClick={() => setSelectedImage(data.image)}>
            <Image
              width={300}
              height={200}
              src={data.image}
              alt="Shoes"
              className="rounded-xl cursor-pointer"
            />
          </button>
        </div>
      ))}

      {/* Modal */}
      {selectedImage && (
        <dialog id="image_modal" className="modal modal-open">
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg mb-4">Selected Image</h3>
            <Image
              width={500}
              height={350}
              src={selectedImage}
              alt="Selected"
              className="rounded-xl"
            />
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ModalImage;

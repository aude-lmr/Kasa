// import React, { useState } from "react";

// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// export const Slideshow = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   return (
//     <div>
//       <FaChevronLeft className="left-arrow" onClick={prevSlide} />
//       <FaChevronRight className="right-arrow" onClick={nextSlide} />
//       {slides.map((slide, index) => {
//         return (
//           <div key={index}>
//             {index === current && <SlideImage src={slide.image} alt="" />}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

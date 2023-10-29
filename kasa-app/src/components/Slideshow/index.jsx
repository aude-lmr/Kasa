// import React, { useState } from "react";
// import left from "../../assets/arrow-left.svg";
// import right from "../../assets/arrow-right.svg";
// import styled from "../Slideshow/slideshow.module.scss";

const Slideshow = ({ slides }) => {
  // const [current, setCurrent] = useState(0);
  // const length = slides.size;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };
  return (
    <div>
      <h1>SLIDESHOW</h1>
    </div>
    // <div className={styled.slideshow}>
    //   <img
    //     className={length === 1 ? "none" : "left arrow"}
    //     onClick={prevSlide}
    //     src={left}
    //     alt="précédent"
    //   />
    //   {slides.map((slide, index) => {
    //     return (
    //       <div
    //         key={index}
    //         className={
    //           index === current ? "slideshowActive" : "slideshowInactive"
    //         }
    //       >
    //         {index === current && (
    //           <img
    //             className={styled.slideshowSlide}
    //             src={slide}
    //             alt="img-appartement"
    //           />
    //         )}
    //         {index === current && length > 1 && (
    //           <span className={styled.slideshowPagination}>
    //             {current + 1}/{length}
    //           </span>
    //         )}
    //       </div>
    //     );
    //   })}
    //   <img
    //     className={length === 1 ? "none" : "right arrow"}
    //     onClick={nextSlide}
    //     src={right}
    //     alt="suivant"
    //   />
    // </div>
  );
};

// export const Slideshow = ({ slides }) => {

//   return (
//     <div className={styled.slideshow}>
//       <img
//         className={length === 1 ? "none" : "left arrow"}
//         onClick={prevSlide}
//         src={left}
//         alt="précédent"
//       />
//       {slides.map((slide, index) => {
//         return (
//           <div
//             key={index}
//             className={
//               index === current ? "slideshowActive" : "slideshowInactive"
//             }
//           >
//             {index === current && (
//               <img
//                 className={styled.slideshowSlide}
//                 src={slide}
//                 alt="img-appartement"
//               />
//             )}
//             {index === current && length > 1 && (
//               <span className={styled.slideshowPagination}>
//                 {current + 1}/{length}
//               </span>
//             )}
//           </div>
//         );
//       })}
//       <img
//         className={length === 1 ? "none" : "right arrow"}
//         onClick={nextSlide}
//         src={right}
//         alt="suivant"
//       />
//     </div>
//   );
// };
export default Slideshow;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styled from "./collapse.module.scss";

export const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <>
      <div>
        <button className={styled.collapseBtn} onClick={() => setIsOpen(false)}>
          <span className={styled.title}>{props.title}</span>

          <FontAwesomeIcon className={styled.icon} icon={faChevronUp} />
        </button>

        <div className={styled.textContainer}>{props.children}</div>
      </div>
    </>
  ) : (
    <>
      <button className={styled.collapseBtn} onClick={() => setIsOpen(true)}>
        <span className={styled.title}>{props.title}</span>
        <FontAwesomeIcon
          className={styled.icon}
          icon={faChevronUp}
          rotation={180}
        />
      </button>
    </>
  );
};

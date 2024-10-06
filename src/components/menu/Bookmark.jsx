import React from 'react';
import { useState } from "react";

import ButtonComponent from '../../components/common/ButtonComponent';


const Bookmark = ({ className, id, boolean }) => {

    const [onBookmark, setBookmark] = useState(boolean);
    const ToggleBookmark = () => {
        setBookmark(!onBookmark);
    }
    
  return (
    <ButtonComponent onClick={ToggleBookmark} className={onBookmark ? "nav_bookmark on" : "nav_bookmark"} type="button"></ButtonComponent>
  );
};

export default Bookmark;
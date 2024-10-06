import React from 'react';
import ImgComponent from './ImgComponent';


const Paging10Component = ({ wrapClass }) => {

    return (
        <div className={wrapClass}>
            <a href="#" className="btn_pagination_LR">
                <ImgComponent className="valign_top" src={'arrow_left_2line_bk_16.svg'} />
            </a>
            <a href="#" className="btn_pagination_LR">
                <ImgComponent className="valign_top" src={'arrow_left_bk_16.svg'} />
            </a>
            <a className="btn_pagination selected">
                <span>1</span>
            </a>
            <a className="btn_pagination">
                <span>2</span>
            </a>
            <a className="btn_pagination">
                <span>3</span>
            </a>
            <a className=" btn_pagination">
                <ImgComponent src={'more_bk_16.svg'} />
            </a>                                
            <a className="btn_pagination">
                <span>10</span>
            </a>
            <a href="#" className="btn_pagination_LR">
                <ImgComponent className="valign_top" src={'arrow_right_bk_16.svg'} />
            </a>
            <a href="#" className="btn_pagination_LR">
                <ImgComponent className="valign_top" src={'arrow_right_2line_bk_16.svg'} />
            </a>
        </div>
    );
};

export default Paging10Component;

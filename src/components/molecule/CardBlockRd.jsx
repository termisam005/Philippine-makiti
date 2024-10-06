import React from "react";


const CardBlockRd = ({
    divClass,
    titleClass,
    title,
    more,
    moreClass,
    moreTxt,
    contentClass,
    content,
    BigCount,
    miniClass,
    miniTxt,
    children
}) => {
    return (
        <div className={"bg_white p-20 radius_10 ".concat(divClass)}>
            <div className={"dflx_ac_jbet"}>
                <p className={"fs_16_bold ".concat(titleClass)}>
                    {title}
                </p>
                { more === true?
                    <span className={"fs_14 ".concat(moreClass)}>{moreTxt}</span>
                    : null
                }
            </div>
            { BigCount === true?
                <>
                    <div className="dashbox_in twoline dflx_ac_jcent p-t-14">
                        <p className={"fs_32_bold ".concat(contentClass)}>{content}</p>
                    </div>
                    <span className={"tac fs_11 ".concat(miniClass)}>{miniTxt}</span>
                </>
                : children
            }
        </div>
    );
};

export default CardBlockRd;
import React from "react";
import "./ListDisplay.scss";

interface IListDisplay {
    isListOpened: boolean;
    optionList: Array<string>;
}

const ListDisplay: React.FC<IListDisplay> = ({isListOpened = false, optionList}) => {
    return (
        <>
            {isListOpened && (
                <div className="ListDisplay__container">
                    {optionList.map((el: string) => {
                        return (
                            <span>{el}</span>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default ListDisplay;
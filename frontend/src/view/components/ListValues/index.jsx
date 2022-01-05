import { useState, useEffect } from 'react';
import { MdDeleteForever, MdClose } from 'react-icons/md';

import "../../styles/listValues.css";

function ListValues(object) {

    const internalList = object.props;

    function alterationStyleListValues() {
        object.closeMenu();
    }

    return (
        <div className="c-list-values" aria-label='c-list-values'>
            <div className="c-list-valuse__c-internal">
                <button aria-label='closeButton' className="button-list-values button-list-values--head" onClick={() => alterationStyleListValues()}>
                    <MdClose />
                </button>
                <h2 className="c-list-values__title">
                    {object.nameList}
                </h2>
                <ul className="ul-list-internal">
                    {
                        Object.keys(internalList).map((data, index) => {
                            const arrayObjeto = Object.keys(internalList[`${data}`]);

                            if (arrayObjeto.length === 2) {

                                const listPropried = internalList[`${data}`];

                                console.log(`${listPropried[`${arrayObjeto[0]}`]}`);

                                return (
                                    <li key={index} aria-label="doubleList" className="ul-list-internal__list-item ul-list-iternernal__list-item--double">
                                        <div className="ul-list-internal__header">
                                            <label>
                                                {listPropried[`${arrayObjeto[0]}`]}
                                            </label>
                                            <button className="button-list-values">
                                                <MdDeleteForever />
                                            </button>
                                        </div>
                                        <p>
                                            {listPropried[`${arrayObjeto[1]}`]}
                                        </p>
                                    </li>
                                )
                            }

                            return (
                                <li key={index} aria-label="unitList" className="ul-list-internal__list-item ul-list-iternernal__list-item--unit">
                                    <p>
                                        {data[`${internalList[`${data}`]}`]}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ListValues;
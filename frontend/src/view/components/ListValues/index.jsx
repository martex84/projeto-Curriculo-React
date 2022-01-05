import { useState } from 'react';
import { MdDeleteForever, MdClose } from 'react-icons/md';

import "../../styles/listValues.css";

function ListValues(object) {

    const [styleMain, setStyleMain] = useState({ display: 'block' });

    const internalList = object.props;

    return (
        <div className="c-list-values" style={styleMain} >
            <div className="c-list-valuse__c-internal">
                <button className="button-list-values button-list-values--head">
                    <MdClose />
                </button>
                <h2 className="c-list-values__title">
                    {object.nameList}
                </h2>
                <ul className="ul-list-internal">
                    {
                        internalList.map((data, index) => {
                            const arrayObjeto = Object.keys(data);
                            if (arrayObjeto.length === 2) {

                                return (
                                    <li key={index} aria-label="doubleList" className="ul-list-internal__list-item ul-list-iternernal__list-item--double">
                                        <div className="ul-list-internal__header">
                                            <label>
                                                {data[`${arrayObjeto[0]}`]}
                                            </label>
                                            <button className="button-list-values">
                                                <MdDeleteForever />
                                            </button>
                                        </div>
                                        <p>
                                            {data[`${arrayObjeto[1]}`]}
                                        </p>
                                    </li>
                                )
                            }

                            return (
                                <li key={index} aria-label="unitList" className="ul-list-internal__list-item ul-list-iternernal__list-item--unit">
                                    <p>
                                        {data[`${arrayObjeto[0]}`]}
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
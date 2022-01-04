import "../../styles/listValues.css";

function listValues(listArray) {

    const internalList = listArray.props;

    return (
        <>
            <div>
                <ul>
                    {
                        internalList.map((data, index) => {
                            const arrayObjeto = Object.keys(data);
                            if (arrayObjeto.length === 2) {

                                return (
                                    <li key={index} aria-label="doubleList">
                                        <label >
                                            {data[`${arrayObjeto[0]}`]}
                                        </label>
                                        <p>
                                            {data[`${arrayObjeto[1]}`]}
                                        </p>
                                    </li>
                                )
                            }

                            return (
                                <li key={index} aria-label="unitList">
                                    <p>
                                        {data[`${arrayObjeto[0]}`]}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default listValues;
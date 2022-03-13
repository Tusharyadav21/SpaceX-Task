import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from '../Common.Module.css';

const Past = () => {
    const [details, setDetails] = useState([])
    const navigate = useNavigate();
    const fetchData = useCallback(async () => {
        const response = await fetch("https://api.spacexdata.com/v5/launches/past");
        const data = await response.json();
        setDetails(data === null ? [] : data)
        // console.log(data);
    }, [setDetails]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const Redirect = (element) => {
        // console.log(id)
        navigate(`/launch/${element.id}`, { element })
    }


    return (
        <>
            <div className={styles.body}>
                {/* {console.log(details)} */}
                {details === null ? null : details.map((el) => {
                    return (
                        <div key={el.id} className={styles.card} onClick={() => {
                            Redirect(el)
                        }}>
                            <img src={el.links.patch.large === null || undefined ? "Not Available" : el.links.patch.large} alt={el.links.patch.large === null || undefined ? "Not Available" : "Flight Logo"} />
                            <h3>{el.name}</h3>
                            <h4>Launch on : {el.date_utc.substring(8, 10)}/{el.date_utc.substring(5, 7)}/{el.date_utc.substring(0, 4)}</h4>
                            <h5>Flight No. : {el.flight_number}</h5>
                            <h5>{el.details === null || undefined ? "Not Available" : el.details}</h5>
                        </div>
                        // </Navigate>
                    )
                })}
            </div>
        </>
    )
}

export default Past;
import React, { useState, useEffect, useCallback } from 'react'

import styles from '../Common.Module.css';

const Upcoming = () => {
    const [details, setDetails] = useState([])
    const fetchData = useCallback(async () => {
        const response = await fetch("https://api.spacexdata.com/v5/launches/upcoming");
        const data = await response.json();
        setDetails(data === null ? [] : data)
        // console.log(data);
    }, [setDetails]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <div className={styles.body}>
                {console.log(details)}
                {details === null ? null : details.map((el) => {
                    return (
                        <div className={styles.card}>
                            <img src={el.links.patch.large === null || undefined ? "Not Available" : el.links.patch.large} alt={el.links.patch.large === null || undefined ? "Not Available" : "Flight Logo"}/>
                            <h3 key={el.id}>{el.name}</h3>
                            <h4 key={el.id}>Launch on : {el.date_utc.substring(8,10)}/{el.date_utc.substring(5,7)}/{el.date_utc.substring(0,4)}</h4>
                            <h5 key={el.id}>Flight No. : {el.flight_number}</h5>
                            <h5 key={el.id}>{el.details === null || undefined ? "Not Available" : el.details}</h5>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Upcoming;
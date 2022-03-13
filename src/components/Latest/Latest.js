import React, { useState, useEffect, useCallback } from 'react'

import styles from '../Common.Module.css';

const Latest = () => {
    const [details, setDetails] = useState(null)
    const fetchData = useCallback(async () => {
        const response = await fetch("https://api.spacexdata.com/v5/launches/latest");
        const data = await response.json();
        setDetails(data === null ? {} : data)
        // console.log(data);
    }, [setDetails]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <div className={styles.body}>
                {details === null ? null : 
                    <div key={details.id} className={styles.card} >
                        {console.log(details)}
                        <img src={details.links.patch.large === null || undefined ? "Not Available" : details.links.patch.large} alt={details.links.patch.large === null || undefined ? "Not Available" : "Flight Logo"} />
                        <h3 >{details.name}</h3>
                        <h4>Launch on : {details.date_utc.substring(8, 10)}/{details.date_utc.substring(5, 7)}/{details.date_utc.substring(0, 4)}</h4>
                        <h5>Flight No. : {details.flight_number}</h5>
                        <h5>{details.details === null || undefined ? "Not Available" : details.details}</h5>
                    </div>
                }
            </div>
        </>
    )
}

export default Latest;
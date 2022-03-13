import React, { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom';


const LaunchDetails = () => {

    const { element } = useLocation();
    // const { id } = element;
    // console.log(id)

    // console.log(id)
    return (
        <>
            <div>NEW</div>
            {/* <div className={styles.body}>
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
            </div> */}
        </>
    )
}

export default LaunchDetails;
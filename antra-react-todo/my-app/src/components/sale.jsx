import React, { useEffect, useState } from "react";

export default function Sale({ data }) {
    const [sumArray, setSumArray] = useState([]);
    let sumdata = [...data];
    const calculateSum = () => {
        let sumHash = {}
        let firstOccur = {}
        sumdata.forEach((item, index) => {
            if (!sumHash[item.region]) {
                sumHash[item.region] = 0;
                firstOccur[item.region] = index;
            }
            sumHash[item.region] += item.sales;
        })

        let updatedData = [...data];
        let offset = 0;

        for (let region in sumHash) {
            let sumRow = { region, model: "Sum", sales: sumHash[region]};
            updatedData.splice(firstOccur[region] + offset, 0, sumRow);
            offset++;
        }

        setSumArray(updatedData);

    }

    useEffect(() => {
        calculateSum();
    }, [data])


    return (
        <table>
            <thead>
                <tr>
                    <th>Region</th>
                    <th>Model</th>
                    <th>Sales</th>
                </tr>
            </thead>
            <tbody>
                {sumArray.map((val, index) =>
                (
                    <tr key={index}>
                        <td>{val.region}</td>
                        <td>{val.model}</td>
                        <td>{val.sales}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}

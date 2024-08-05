import React, { useEffect, useState } from "react";

export default function SaleFilter({ data }) {
    const [selectedRegion, setSelectedRegion] = useState("all");
    const [selectedModel, setSelectedModel] = useState("all");

    const regions = [...new Set(data.map(item => item.region))];
    const Models = [...new Set(data.map(item => item.model))];

    const filterData = data.filter(item => {
        return (selectedRegion === "all" || item.region === selectedRegion) &&
            (selectedModel === "all" || item.model === selectedModel);
    });
    return (
        <div>
            <span>Region Filter</span>
            <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
                <option value="all">All</option>
                {(
                    regions.map((region, key) =>
                        (<option value={region} key={key}>{region}</option>)
                    ))
                }
            </select>
            <span>Model Filter</span>
            <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                <option value="all">All</option>
                {
                    Models.map(model => (
                        <option key={model} value={model}>{model}</option>
                    ))
                }
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Region</th>
                        <th>Model</th>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((val, index) =>
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
        </div>

    )
}

import React from "react";
import { Data } from "../Data.js";

export const Projects = () => {
    return (
        <>
            <div className="container"></div>
            {Data.map((data, key) => {
                return (
                    <div key={key}>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                )
            })}
        </>
    );
};

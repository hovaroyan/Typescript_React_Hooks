import React from 'react';
import {IPropsSelect} from "../interfaces";

const Select:React.FC<IPropsSelect> = (props) => {
    const {Array, multiple, className, value: valueSelect, handleChange, placeholder} = props;


    return (
        <div className={`form-group ${className}`}>
            <select
                multiple={multiple}
                className={`form-control`}
                value={valueSelect}
                onChange={(e) => handleChange(e)}
            >
                <option value="" disabled={true} hidden={true}>{placeholder}</option>
                {
                    Array.map((item) => {
                        return (
                            <option value={item.id} key={item.id}>
                                {item.name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    );
};

export default Select;
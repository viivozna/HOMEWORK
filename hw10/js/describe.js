'use strict'

function describe(value, level = 0) {

    let valueType = typeof (value);
    let valueInfo = null;
    let valueText = "";
    let displayValue = value;
    let secondaryInf = "";
    let indent = "    ".repeat(level + 1);

    if (value === null) {
        valueType = "null";
    } else if (Array.isArray(value)) {
        valueType = "array";
    } else if (Number.isNaN(value)) {
        valueType = "NaN";
    }

    if (valueType === "string") {
        valueInfo = value.length;
        valueText = "Довжина:";
    } else if (valueType === "array") {
        valueInfo = value.length;
        valueText = "Кількість елементів:";
        
        for (const item of value) {
            secondaryInf += indent + "- " + describe(item, level + 1);
        }

    } else if (valueType === "object") {
        valueInfo = Object.keys(value).join(", ");
        displayValue = JSON.stringify(value);
        valueText = "Ключі:";

        for (const key of Object.keys(value)) {
            secondaryInf += indent + "- " + key + ": " + describe(value[key], level + 1);
        }

    } else if (valueType === "function") {
        valueInfo = value.length;
        valueText = "Аргументів:";
    }

    if (valueType === "bigint") {
        displayValue = `${value}n`;
    } else if (valueType === "symbol") {
        displayValue = value.description ?? "без опису";
    }

    if (valueText !== "") {
        return (`Тип: ${valueType}, Значення: ${displayValue}, ${valueText} ${valueInfo}\n${secondaryInf}`);
    } else {
        return (`Тип: ${valueType}, Значення: ${displayValue}\n${secondaryInf}`);
    }

}
import classnames from 'classnames';

const getCustomClassName = (first, second, third) => {
    if (Array.isArray(first)) {
        return first.filter(f => typeof f === 'string').join(' ');
    }
    if (Array.isArray(second)) {
        return second.filter(f => typeof f === 'string').join(' ');
    }
    if (typeof second === 'string') {
        return second;
    }
    if (Array.isArray(third)) {
        return third.filter(f => typeof f === 'string' && f.length > 0).join(' ');
    }
    if (typeof third === 'string') {
        return third;
    }

    return '';
};

/**
 * Бэм генератор
 * @param {String} blockName - название блока
 * @returns {function} - возвращает функцию с тремя возожными параметрами
 * @param {String} elementName - название элемента
 * @param {Object} modificatorsObject - объект с модификаторами
 * @param {String} customClassNames - названия кастомных классов
 * @returns {String}
 */
function cnCreate(blockName) {
    function getElement(
        elementName,
        modificatorsObject,
        customClassNames,
    ) {
        const prefix = typeof elementName === 'string' ? elementName : '';
        const className = getCustomClassName(elementName, modificatorsObject, customClassNames);
        const secondMods = !Array.isArray(modificatorsObject) && typeof modificatorsObject !== 'string'
            ? modificatorsObject
            : undefined;
        const params = typeof elementName !== 'string' && !Array.isArray(elementName)
            ? elementName
            : secondMods;

        if (!params || (typeof params === 'object' && Object.keys(params).length === 0)) {
            return classnames(`${blockName}${prefix ? '__' + prefix : ''}`, className);
        }

        const classParams = {};
        let prefixKey = '', withoutPrefix = '';

        for (const key in params) {
            if (typeof params[key] === 'boolean' && params[key]) {
                prefixKey = `__${prefix}_${key}`;
                classParams[
                    `${blockName}${prefix ? prefixKey : '_' + key}`
                ] = true;
            } else if (typeof params[key] === 'string') {
                prefixKey = `__${prefix}_${key}_${params[key]}`;
                withoutPrefix = `_${key}_${params[key]}`;
                classParams[
                    `${blockName}${prefix ? prefixKey : withoutPrefix}`
                ] = true;
            }
        }

        return prefix === ''
            ? classnames(blockName, classParams, className)
            : classnames(`${blockName}__${prefix}`, classParams, className);
    }

    return getElement;
}

export default cnCreate;

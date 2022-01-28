export const increment = () => {
    return {
        type: 'increment',
        payload: 4
    };
};

export const decrement = () => {
    return {
        type: 'decrement'
    };
};
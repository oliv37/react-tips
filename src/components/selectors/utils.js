export const BLUE_TYPE = 'BLUE';
export const GREEN_TYPE = 'GREEN';

const INGREDIENTS = [
    {
        name: 'surimi',
        type: GREEN_TYPE
    },
    {
        name: 'pomme',
        type: BLUE_TYPE
    },
    {
        name: 'emmental',
        type: GREEN_TYPE
    },
    {
        name: 'melon',
        type: BLUE_TYPE
    },
    {
        name: 'pastèque',
        type: BLUE_TYPE
    },
    
    {
        name: 'tomate',
        type: GREEN_TYPE
    }
]

export const initialState = {
    counter: 0,
    ingredients: [...INGREDIENTS],
    types: [GREEN_TYPE, BLUE_TYPE]
};

export const filterByType = (ingredients, filterType) => 
    ingredients.filter(({type}) => type === filterType);

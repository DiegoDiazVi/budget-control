export const idGenerate = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return date + random ;
}

const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
}

export const dateGenerate = (parameters = options) => {
    const date = new Date();
    return date.toLocaleDateString('es-ES', parameters);
}

export const toCurrencyFormat = (money) => {
    return money.toLocaleString('es-CO',{
        style: 'currency',
        currency: 'COP'
    });
}
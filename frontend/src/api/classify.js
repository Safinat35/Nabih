export const classifyText = async (text) => {
    const response = await fetch('http://127.0.0.1:8000/api/classify/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
    });

    const data = await response.json();
    return data;
};

try { 
    const fetchedNumbers = await fetchNumbersFromServer(numberid);
    updateStoredNumbers(fetchedNumbers);
    const average = calculateAverage();
    res.json({ average });
} catch (error) {
    console.error('Error fetching numbers:', error);
    res.status(500).json({ error: 'Error fetching numbers from server' });
}
function isValidNumberId(numberid) {
    return ['p', 'f', 'e', 'r'].includes(numberid);
}
function calculateAverage() {
    if (storedNumbers.length === 0) {
        return 0;
    }
    const sum = storedNumbers.reduce((acc, num) => acc + num, 0);
    return sum / storedNumbers.length;
}



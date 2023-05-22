const formatDate = date => {
    const dateObj = new Date(date);
    const dateStr = dateObj.toISOString();
    const [year, month, rest] = dateStr.split("-");
    const day = rest.split("T")[0];
    return `${day}-${month}-${year}`;
};

export { formatDate };

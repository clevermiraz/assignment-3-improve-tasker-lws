export const getRandomTagColor = () => {
    const bgColors = [
        "bg-[#00D991A1]",
        "bg-[#1C92FFB0]",
        "bg-[#FE1A1AB5]",
        "bg-[#FEB019B0]",
        "bg-[#FE4C1C]",
    ];
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};

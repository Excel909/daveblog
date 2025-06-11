export function formatDate(inputDate) {
  const date = new Date(inputDate);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = monthNames[date.getMonth()];

  const day = date.getDate(); 

  const year = date.getFullYear();

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; 

    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const suffix = getDaySuffix(day);

  return `${month} ${day}${suffix} ${year}`;
}
import PropTypes from "prop-types";
const SetTime = ({ time }) => {
  // Function to format the time based on how long ago it was
  const formatTime = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);
    const secondsAgo = Math.floor((now - date) / 1000);

    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30); // Approximation

    if (monthsAgo < 1) {
      // If less than a month, show "time ago" format
      if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
      if (minutesAgo < 60) return `${minutesAgo} minutes ago`;
      if (hoursAgo < 24) return `${hoursAgo} hours ago`;
      if (daysAgo < 7) return `${daysAgo} days ago`;
      if (daysAgo < 30) return `${Math.floor(daysAgo / 7)} weeks ago`;
    }

    // Otherwise, show full date and time
    const options = { month: "long", day: "2-digit", year: "numeric" };
    const formattedDate = date
      .toLocaleDateString("en-US", options)
      .toUpperCase();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`;

    return `${formattedDate} ${formattedTime}`;
  };

  return <>{formatTime(time)}</>;
};

SetTime.propTypes = {
  time: PropTypes.string.isRequired,
};

export default SetTime;

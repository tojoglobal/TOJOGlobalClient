import PropTypes from "prop-types";

const SetTime = ({ time }) => {
  // Function to format the time based on how long ago it was
  const formatTime = (timestamp) => {
    const now = new Date();

    // Convert input time to BD time (UTC+6)
    const date = new Date(timestamp);
    const bdOffset = 6 * 60 * 60 * 1000; // UTC+6 in milliseconds
    const bdTime = new Date(date.getTime() + bdOffset);

    const secondsAgo = Math.floor((now.getTime() - bdTime.getTime()) / 1000);

    if (secondsAgo < 60) return `${secondsAgo} seconds`;
    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) return `${minutesAgo} minutes`;
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) return `${hoursAgo} hours`;
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 7) return `${daysAgo} days`;
    if (daysAgo < 30) return `${Math.floor(daysAgo / 7)} weeks`;

    // Format BD time
    const options = {
      timeZone: "Asia/Dhaka",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour12: false,
    };

    return bdTime.toLocaleDateString("en-US", options);
  };

  return <>{formatTime(time)}</>;
};

SetTime.propTypes = {
  time: PropTypes.string.isRequired,
};

export default SetTime;

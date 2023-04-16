import SpotCard from "./SpotCard";

function SpotList({ spots }) {
  return (
    <div className="spot-list">
      {spots.map((spot) => (
        <SpotCard key={spot._id} spot={spot} />
      ))}
    </div>
  );
}

export default SpotList;
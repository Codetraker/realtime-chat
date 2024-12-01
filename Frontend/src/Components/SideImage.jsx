export const SideImage = () => {
  const gridItem = Array(9).fill(null);
  return (
    <div className="text-center bg-base-200">
      <div className="flex justify-center py-24">
        <div className=" max-w-64">
          <div className="grid grid-cols-3 gap-3 justify-items-center">
            {gridItem.map((_, index) => (
              <div
                key={index}
                className={`square rounded-2xl size-20 bg-primary/10 ${
                  index % 2 === 0 ? "animate-pulse" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <h2 className="font-bold text-2xl mb-4">Join our Community</h2>
      <p className="text-base-content/60 pb-20">
        Connect with friends, share moments, and stay in touch with your loved
        ones.
      </p>
    </div>
  );
};

const ApplyJobContainer = ({ children }) => {
  return (
    <div className="bg-background px-16 py-7 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">{children}</div>
    </div>
  );
};

export default ApplyJobContainer;

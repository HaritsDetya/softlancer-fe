const ProfileContainer = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 px-20 py-11 bg-background max-md:px-5">
        {children}
      </div>
    </>
  );
};

export default ProfileContainer;

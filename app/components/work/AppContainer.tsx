type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[1050px] mx-auto my-6 pb-14 border-b border-dashed border-gray-700">
      {children}
    </div>
  );
};

export default AppContainer;

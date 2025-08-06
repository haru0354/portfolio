type AppContainerProps = {
  children: React.ReactNode;
  bg?: string;
};

const AppContainer: React.FC<AppContainerProps> = ({
  children,
  bg = "bg-white"
}) => {
  return (
    <div className={`w-full py-12 ${bg}`}>
      <div className="w-full max-w-[1050px] mx-auto px-2">
        {children}
      </div>
    </div>
  );
};

export default AppContainer;

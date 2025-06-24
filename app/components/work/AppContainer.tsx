type AppContainerProps = {
  children: React.ReactNode;
  border?: boolean;
};

const AppContainer: React.FC<AppContainerProps> = ({
  children,
  border = true,
}) => {
  const borderBottom = border ? "border-b border-dashed border-gray-700" : "";

  return (
    <div className={`w-full max-w-[1050px] mx-auto my-6 pb-14 ${borderBottom}`}>
      {children}
    </div>
  );
};

export default AppContainer;

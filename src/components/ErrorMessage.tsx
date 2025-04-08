interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto mt-4 text-center col-start-2 col-span-2">
      <span className="block sm:inline m-auto">{message || 'Algo deu errado. Por favor, tente novamente.'}</span>
    </div>
  );
};

export default ErrorMessage;

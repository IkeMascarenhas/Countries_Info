import { LoaderCircle } from 'lucide-react';

const Loading = () => {
  return (
    <div className="col-span-4 flex justify-center items-center h-64">
      <LoaderCircle className="animate-spin text-6xl text-blue-500" />
    </div>
  );
};

export default Loading;

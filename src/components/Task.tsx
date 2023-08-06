
type TaskProps = {
    id: string;
title: string;
isExpanded: boolean;
}

const Task = ({ id, title, isExpanded }: TaskProps) => {
  return isExpanded ? (
    <span className="whitespace-normal break-words block max-h-48 overflow-hidden w-1000 flex-1 outline-none p-2 border border-purple-800 bg-transparent rounded-lg text-base tracking-widest shadow-md flex justify-between" id={id}>{title}</span>
    
  ) : (
    <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-1000 flex-1 outline-none p-2 border border-purple-800 bg-transparent rounded-lg text-base tracking-widest shadow-md flex justify-between" id={id}>{title}</span>
  );
};

export default Task;
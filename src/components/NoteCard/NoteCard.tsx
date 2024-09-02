/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaExpand } from "react-icons/fa6";
import { INoteDetails } from "../../misc/app.interface";
import { NoteData } from "../../misc/data";
import { Tooltip } from "antd";

export const NoteCard = ({
  data,
  showModal,
}: {
  data: INoteDetails;
  showModal: any;
}) => {
  const handleDelete = (id: string) => {
    const note: any = NoteData.find((data) => data._id == id);
    if (note) {
      NoteData.splice(note?._id, 1);
    }
  };
  return (
    <div className=" bg-white rounded-xl p-4 text-black flex flex-col items-center justify-start">
      <div className="w-full h-8 flex justify-between items-center font-semibold overflow-hidden">
        {data.title}
        <div className="h-8 flex justify-center items-center">
          <Tooltip placement="top" title="Edit" color="green">
            <FaRegEdit className="hover:cursor-pointer mr-2 hover:text-green-600" />
          </Tooltip>
          <Tooltip placement="top" title="Delete" color="red">
            <RiDeleteBin5Line
              className="hover:cursor-pointer hover:text-red-600"
              onClick={() => handleDelete(data._id)}
            />
          </Tooltip>
        </div>
      </div>
      <div className="w-full h-full mt-4 overflow-auto">{data.description}</div>
      <div className="w-full h-4 mt-4 flex justify-between items-center">
        <div
          className={`${
            data.tag == "Important"
              ? "bg-red-500"
              : data.tag == "Medium"
              ? "bg-orange-500"
              : "bg-green-500"
          } px-2 rounded-lg text-white uppercase text-[0.7rem]`}
        >
          {data.tag}
        </div>
        <Tooltip placement="top" title="Expand" color="blue">
          <FaExpand
            className="hover:cursor-pointer hover:text-blue-600"
            onClick={() => showModal(data)}
          />
        </Tooltip>
      </div>
    </div>
  );
};

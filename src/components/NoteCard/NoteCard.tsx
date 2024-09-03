/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaExpand } from "react-icons/fa6";
import { INoteDetails } from "../../misc/app.interface";
import { Tooltip } from "antd";
import axios from "axios";
import { BASE_URL } from "../../env/env";
import { PriorityTag } from "../PriorityTag/PriorityTag";

export const NoteCard = ({
  data,
  showModal,
  getAllNotes,
  showUpdateModal,
}: {
  data: INoteDetails;
  showModal: any;
  getAllNotes: any;
  showUpdateModal: any;
}) => {
  const baseUrl = BASE_URL;
  const handleDelete = async (id: string) => {
    const res = await axios.delete(`${baseUrl}/note/delete/${id}`);
    if (res.status == 200) {
      getAllNotes();
    }
  };
  return (
    <div className=" bg-white rounded-xl p-4 text-black flex flex-col items-center justify-start">
      <div className="w-full h-8 flex justify-between items-center font-semibold overflow-hidden">
        {data.title}
        <div className="h-8 flex justify-center items-center">
          <Tooltip placement="top" title="Edit" color="green">
            <FaRegEdit
              className="hover:cursor-pointer mr-2 hover:text-green-600"
              onClick={()=>showUpdateModal(data)}
            />
          </Tooltip>
          <Tooltip placement="top" title="Delete" color="red">
            <RiDeleteBin5Line
              className="hover:cursor-pointer hover:text-red-600"
              onClick={() => handleDelete(data._id)}
            />
          </Tooltip>
        </div>
      </div>
      <div className="w-full h-[12rem] mt-4 overflow-auto text-justify pr-2">
        {data.description}
      </div>
      <div className="w-full h-4 mt-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <PriorityTag tag={data.tag} />
          <div className="text-[0.7rem]">
            {new Date(data.createdAt).toDateString()}
          </div>
        </div>
        <FaExpand
          className="hover:cursor-pointer hover:text-blue-600"
          onClick={() => showModal(data)}
        />
      </div>
    </div>
  );
};

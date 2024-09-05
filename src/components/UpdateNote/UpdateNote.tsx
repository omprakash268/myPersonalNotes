/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { INoteDetails } from "../../misc/app.interface";
import { Select } from "antd";
import axios from "axios";
import { BASE_URL } from "../../env/env";

export const UpdateNote = ({
  data,
  getAllNotes,
  handleCancel,
}: {
  data: INoteDetails;
  getAllNotes: any;
  handleCancel: any;
}) => {
  const [notesFormData, setNotesFormData] = useState({
    title: "",
    description: "",
    tag: "Low",
  });

  const baseUrl = BASE_URL;

  axios.defaults.withCredentials = true;

  const priorityListItems = [
    { value: "Important", label: "Important" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];

  const updateNote = async (e: any) => {
    e.preventDefault();
    await axios.patch(`${baseUrl}/note/update/${data._id}`, notesFormData);
    handleCancel();
    getAllNotes();
  };

  const isFormValid = () => {
    // Check if all required fields are filled
    return notesFormData.title && notesFormData.description;
  };

  const handlePriorityChange = (value: string) => {
    setNotesFormData({ ...notesFormData, tag: value });
  };

  const handleInputChange = (e: any) => {
    setNotesFormData({ ...notesFormData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setNotesFormData({
      title: data?.title ?? "",
      description: data?.description ?? "",
      tag: data?.tag ?? "Low",
    });
  }, [data]);

  return (
    <>
      <form
        onSubmit={updateNote}
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="w-full gap-2 flex flex-col justify-center items-center text-black border-[1px] border-gray-300 p-2 rounded-lg">
          <div className="w-full text-left font-semibold">Title</div>
          <input
            type="text"
            placeholder="Enter title"
            className="w-full h-10 p-2 border-[1px] border-gray-400 outline-none rounded-sm text-sm mb-4"
            onChange={handleInputChange}
            name="title"
            value={notesFormData.title}
          />

          <div className="w-full text-left font-semibold">Description</div>

          <textarea
            name="description"
            id="desContainer"
            className="w-full rounded-sm p-2 text-sm border-[1px] border-gray-400 outline-none resize-none mb-4"
            rows={10}
            placeholder="Enter description"
            value={notesFormData.description}
            onChange={handleInputChange}
          ></textarea>
          <div className="w-full add-note-layout">
            <div className="text-lg h-10 text-black flex justify-start items-center">
              Tag :
              <Select
                defaultValue="Low"
                style={{ width: 120 }}
                loading={false}
                options={priorityListItems}
                className="text-sm ml-4"
                onChange={handlePriorityChange}
                value={notesFormData.tag}
              />
            </div>
            <button
              className="rounded-sm h-10 bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:text-black"
              disabled={!isFormValid()}
              type="submit"
            >
              Update Note
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

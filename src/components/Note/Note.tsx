/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { INoteDetails } from "../../misc/app.interface";
import { NoteData } from "../../misc/data";
import { NoteCard } from "../NoteCard/NoteCard";
import { Select, Modal } from "antd";

import "./Note.css";

export const Note = () => {
  const [myNoteData, setMyNoteData] = useState<INoteDetails[]>([]);
  const [notesFormData, setNotesFormData] = useState({ tag: "Low" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModelData] = useState<INoteDetails>();

  const showModal = (note: INoteDetails) => {
    setIsModalOpen(true);
    setModelData(note);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const priorityListItems = [
    { value: "Important", label: "Important" },
    { value: "Medim", label: "Medim" },
    { value: "Low", label: "Low" },
  ];

  const handlePriorityChange = (value: string) => {
    setNotesFormData((prev) => {
      return { ...prev, tag: value };
    });
  };

  const handleInputChange = (e: any) => {
    setNotesFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addNewNote = () => {
    console.log(notesFormData);
  };

  useEffect(() => {
    setMyNoteData(NoteData);
  }, []);

  return (
    <div className="bg-slate-800 text-white w-full h-min-[100vh] flex flex-col items-center p-8">
      <p className="text-3xl uppercase text-orange-500 font-bold">
        Create your notes now
      </p>
      <div className="w-full mt-4 flex justify-center">
        <div className="w-full gap-2 flex flex-col justify-center items-center text-black">
          <input
            type="text"
            placeholder="Enter title"
            className="w-full md:w-[60%] h-10 p-2 border-none outline-none rounded-sm text-sm"
            onChange={handleInputChange}
            name="title"
          />
          <textarea
            name="description"
            id="desContainer"
            className="w-full md:w-[60%] rounded-sm p-2 text-sm border-none outline-none resize-none"
            rows={5}
            placeholder="Enter description"
            onChange={handleInputChange}
          ></textarea>
          <div className="w-full md:w-[60%] add-note-layout">
            <div className="text-lg h-10 text-white flex justify-start items-center">
              Tag :
              <Select
                defaultValue="Low"
                style={{ width: 120 }}
                loading={false}
                options={priorityListItems}
                className="text-sm ml-4"
                onChange={handlePriorityChange}
              />
            </div>
            <button
              className="rounded-sm h-10 bg-blue-500 hover:text-white"
              disabled={false}
              onClick={addNewNote}
            >
              Add Note
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 responsive-layout-container">
        {myNoteData.map((data) => {
          return <NoteCard data={data} key={data._id} showModal={showModal} />;
        })}
      </div>

      <Modal open={isModalOpen} onCancel={handleCancel} centered footer={null}>
        <div className="h-[10rem] overflow-auto">
          <p className="text-lg font-semibold my-4"> {modalData?.title} </p>
          <p>{modalData?.description}</p>
        </div>
      </Modal>
    </div>
  );
};

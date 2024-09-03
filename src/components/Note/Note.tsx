/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { INoteDetails } from "../../misc/app.interface";
import { NoteCard } from "../NoteCard/NoteCard";
import { Select, Modal, Skeleton } from "antd";
import axios from "axios";
import "./Note.css";
import { BASE_URL } from "../../env/env";
import { PriorityTag } from "../PriorityTag/PriorityTag";
import { UpdateNote } from "../UpdateNote/UpdateNote";

export const Note = () => {
  const [myNoteData, setMyNoteData] = useState<INoteDetails[]>([]);
  const [notesFormData, setNotesFormData] = useState({
    title: "",
    description: "",
    tag: "Low",
    createdAt: Date.now(),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [modalData, setModalData] = useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
    createdAt: Date.now(),
  });
  const [updateModalData, setUpdateModalData] = useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
    createdAt: Date.now(),
  });

  axios.defaults.withCredentials = true;
  const baseUrl = BASE_URL;

  const showModal = (note: INoteDetails) => {
    setModalData(note);
    setIsModalOpen(true);
  };

  const showUpdateModal = (note: INoteDetails) => {
    console.log("update data", note);
    setUpdateModalData(note);
    setIsUpdateModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsUpdateModalOpen(false);
  };

  const priorityListItems = [
    { value: "Important", label: "Important" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];

  const handlePriorityChange = (value: string) => {
    setNotesFormData({ ...notesFormData, tag: value });
  };

  const isFormValid = () => {
    // Check if all required fields are filled
    return notesFormData.title && notesFormData.description;
  };

  const handleInputChange = (e: any) => {
    setNotesFormData({ ...notesFormData, [e.target.name]: e.target.value });
  };

  const addNewNote = async (e: any) => {
    e.preventDefault();
    notesFormData.createdAt = Date.now();
    console.log(notesFormData);
    await axios.post(`${baseUrl}/note/create`, notesFormData);
    setNotesFormData({
      title: "",
      description: "",
      tag: "Low",
      createdAt: Date.now(),
    });
    getAllNotes();
  };

  const getAllNotes = async () => {
    setIsDataLoading(true);
    const response = await axios.get(`${baseUrl}/note/all/1`);

    setMyNoteData(
      response.data.data.sort((a: any, b: any) => {
        const dateA: any = new Date(a.createdAt);
        const dateB: any = new Date(b.createdAt);
        return dateB - dateA;
      })
    );
    setIsDataLoading(false);
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="bg-slate-800 text-white w-full min-h-[100vh] flex flex-col items-center p-8">
      <p className="text-3xl uppercase text-orange-500 font-bold">
        Create your notes now
      </p>
      <div className="w-full mt-4 flex justify-center ">
        <form
          onSubmit={addNewNote}
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="w-full md:w-[60%] gap-2 flex flex-col justify-center items-center text-black border-2 border-blue-500 p-2 rounded-lg">
            <input
              type="text"
              placeholder="Enter title"
              className="w-full h-10 p-2 border-none outline-none rounded-sm text-sm"
              onChange={handleInputChange}
              name="title"
              value={notesFormData.title}
            />
            <textarea
              name="description"
              id="desContainer"
              className="w-full rounded-sm p-2 text-sm border-none outline-none resize-none"
              rows={5}
              placeholder="Enter description"
              value={notesFormData.description}
              onChange={handleInputChange}
            ></textarea>
            <div className="w-full add-note-layout">
              <div className="text-lg h-10 text-white flex justify-start items-center">
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
                Add Note
              </button>
            </div>
          </div>
        </form>
      </div>
      {isDataLoading ? (
        <div className="w-full mt-12 responsive-layout-container">
          <Skeleton active className="bg-white p-8 rounded-lg" />
          <Skeleton active className="bg-white p-8 rounded-lg" />
          <Skeleton active className="bg-white p-8 rounded-lg" />
        </div>
      ) : (
        <div className="w-full mt-12 responsive-layout-container">
          {myNoteData.map((data) => {
            return (
              <NoteCard
                data={data}
                key={data._id}
                showModal={showModal}
                getAllNotes={getAllNotes}
                showUpdateModal={showUpdateModal}
              />
            );
          })}
        </div>
      )}

      {/* View notes details modal */}
      <Modal open={isModalOpen} onCancel={handleCancel} centered footer={null}>
        <div className="max-h-[30rem] pr-4 text-justify my-6 overflow-auto">
          <p className="text-lg font-semibold my-4"> {modalData?.title} </p>
          <p>{modalData?.description}</p>
        </div>
        <div className="w-full mt-4 gap-2 flex justify-start items-center">
          <PriorityTag tag={modalData?.tag ?? " "} />
          <div className="text-[0.7rem]">
            {modalData?.createdAt
              ? new Date(modalData?.createdAt).toDateString()
              : ""}
          </div>
        </div>
      </Modal>

      {/* Update notes details modal*/}
      <Modal
        open={isUpdateModalOpen}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <div className="max-h-[35rem] mt-8 text-justify my-6 overflow-auto">
          <UpdateNote
            getAllNotes={getAllNotes}
            data={updateModalData}
            handleCancel={handleCancel}
          />
        </div>
      </Modal>
    </div>
  );
};

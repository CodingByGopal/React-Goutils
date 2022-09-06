import NoteCard from "./NoteCard";

const NotesArea = ({ notes, deleteNoteById, copyText }) => {
  return (
    <div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {notes?.length > 0 &&
          notes?.map((item, index) => {
            return (
              <NoteCard
                copyText={copyText}
                deleteNoteById={deleteNoteById}
                idProps={item?.id}
                time={item?.time}
                noteColor={item?.notesColorValue}
                key={index}
                title={item?.title}
                text={item?.description}
              />
            );
          })}
      </div>

      {notes?.length === 0 && (
        <div className=" md:p-40 sm:p-20 p-10 bg-slate-100 flex justify-center text-slate-300 font-medium">
          <p className=" md:text-base text-sm text-center">
            Add Notes And Preview It Here
          </p>
        </div>
      )}
    </div>
  );
};

export default NotesArea;

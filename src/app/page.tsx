import NoteForm from "@/components/NoteForm"

const loadNotes=async()=>{
  const res=await fetch('http://localhost:3000/api/notes')
  const notes=await res.json()
  return notes
}

const HomePage = async() => {
  const data= await loadNotes()
  return (
    <div
    className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <NoteForm/>
      {
        data.map((note:any)=>(
          <div key={note.id}
          className="bg-slategrey-300 border border-gray-200 rounded-md shadow-md p-4 w-full sm:w-2/4 my-4"
          >
            <h2>{note.id}. {note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))
      }
    </div>
  );
}

export default HomePage;

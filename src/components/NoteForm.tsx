const NoteForm=() =>{
  return (
    <form action="">
      <input
        type="text"
        name="title"
        autoFocus
        placeholder="titlte"
        className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus-ring-2 focus:ring-blue-600 my-2"
      />

      <textarea
        name="title"
        autoFocus
        placeholder="Content"
        className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus-ring-2 focus:ring-blue-600 my-2"
      />
      <button
      className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >Create</button>
    </form>
  );
}

export default NoteForm;

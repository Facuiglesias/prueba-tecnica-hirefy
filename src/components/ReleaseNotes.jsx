function ReleaseNotes({ text }) {
  return (
    <p className="text-sm text-slate-600 overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:text-black hover:font-bold hover:underline hover:decoration-solid">
      {text}
    </p>
  );
}

export default ReleaseNotes;

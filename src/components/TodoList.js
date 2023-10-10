export const TodoList = (props) => {
  const notes = props.notes;
  const clickHandler = props.clickHandler;
  const delClickHandler = props.delClickHandler;

  console.log(notes);

  return (
    <>
      <h1>Todo List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Task</th>
            <th scope="col">Time</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => {
            return (
              <tr key={note.id}>
                {/* <th scope="row">{note.id}</th> */}
                {note.completed ? (
                  <td className="text-decoration-line-through text-muted">
                    {note.title}
                  </td>
                ) : (
                  <td>{note.title}</td>
                )}
                {note.completed ? (
                  <td className="text-decoration-line-through text-muted">
                    {note.time}
                  </td>
                ) : (
                  <td>{note.time}</td>
                )}
                <td>
                  <div className="row d-flex justify-content-center ms-2">
                    {note.completed ? (
                      <div
                        className="col-2 m-2 btn btn-secondary"
                      >
                        complete
                      </div>
                    ) : (
                      <div
                        className="col-2 m-2 btn btn-warning"
                        onClick={() => clickHandler(note.title)}
                      >
                        complete
                      </div>
                    )}

                    <div className="col-2 m-2 btn btn-danger" onClick={()=> delClickHandler(note.title)}>Delete</div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

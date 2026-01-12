import { useState } from "react";

export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todos) {
        return (
          <div>
            <h1>{todos.title}</h1>
            <h2>{todos.description}</h2>
            <button
              onClick={() => {
                fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id: todos._id,
                  }),
                }).then(async function (res) {
                  const json = await res.json();
                  alert("Marked as Completed");
                });
              }}
            >
              {todos.completed ? "completed" : "mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

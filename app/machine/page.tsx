"use client";

import React, { useEffect, useState, useCallback } from "react";

export interface Machine {
  id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function Machine() {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [firstCall, serFirstCall] = useState(true);

  useEffect(() => {
    if (firstCall) {
      serFirstCall(false);
    }
  }, []);

  useEffect(() => {
    if (!firstCall) {
      fetch("http://localhost:8080/api/machines")
        .then((res) => res.json())
        .then((data: Machine[]) => {
          setMachines(data);
        });
    }
  }, [firstCall]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 data-testid="title">Machines</h1>
      <hr />
      {machines.map((machine: Machine) => {
        return (
          <ul data-testid="list">
            <li>{machine?.id}</li>
            <li>{machine?.description}</li>
            <li>{machine?.name}</li>
            <li>{machine?.status}</li>
            <li>{machine?.createdAt}</li>
            <li>{machine?.updatedAt}</li>
          </ul>
        );
      })}
    </main>
  );
}

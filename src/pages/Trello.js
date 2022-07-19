import React, { useState } from "react";

import "../styles/Trello.css";

import TrelloBoard from "../components/TrelloBoard";

const initialLists = [
  {
    title: "MON",
    status: "mon",
  },
  {
    title: "TUE",
    status: "tue",
  },
  {
    title: "WED",
    status: "wed",
  },
  {
    title: "THU",
    status: "thu",
  },
  {
    title: "FRI",
    status: "fri",
  },
  {
    title: "SAT",
    status: "sat",
  },
  {
    title: "SUN",
    status: "sun",
  },
];

const initialData = {
  mon: [
    {
      id: "qwe1",
      title: "Card 1",
      status: "mon",
      order: 1,
      label: "UI Dev",
    },
    {
      id: "qwe3",
      title: "Card 3",
      status: "mon",
      order: 2,
      label: "UI Dev",
    },
    {
      id: "qwe5",
      title: "Card 5",
      status: "mon",
      order: 3,
      label: "Testing",
    },
  ],
  tue: [
    {
      id: "qwe2",
      title: "Card 2",
      status: "tue",
      order: 1,
      label: "API Integration",
    },
  ],
  wed: [
    {
      id: "qwe4",
      title: "Card 4",
      status: "wed",
      order: 1,
      label: "Bug Fix",
    },
  ],
  thu: [
    {
      id: "qwe4",
      title: "Card 4",
      status: "thu",
      order: 1,
      label: "Bug Fix",
    },
  ],
  fri: [
    {
      id: "qwe4",
      title: "Card 4",
      status: "fri",
      order: 1,
      label: "Bug Fix",
    },
  ],
  sat: [
    {
      id: "qwe4",
      title: "Card 4",
      status: "sat",
      order: 1,
      label: "Bug Fix",
    },
  ],
  sun: [
    {
      id: "qwe4",
      title: "Card 4",
      status: "sun",
      order: 1,
      label: "Bug Fix",
    },
  ],
};

export default function Trello() {
  const [lists, setLists] = useState(initialLists);
  const [data, setData] = useState(initialData);

  // Handle Lists
  // Handle Lists ends here

  // Handle Data
  const cardChangeHandler = (cardInfo, newStatus, targetCardId) => {
    const { id, status: oldStatus } = cardInfo;

    let dropCard = data[oldStatus].find((el) => el.id === id);
    let targetCard =
      targetCardId !== ""
        ? data[newStatus].find((el) => el.id === targetCardId)
        : null;

    let newListOrderValueMax = data[newStatus]
      .map((item) => item.order)
      .reduce((maxValue, a) => Math.max(maxValue, a), 0);

    // CASE 1: If same list, work only this if block then return;
    if (oldStatus === newStatus) {
      let temp = data[oldStatus]
        .map((item) => {
          if (item.id === dropCard.id)
            return {
              ...dropCard,
              order: targetCard
                ? targetCard.order - 1
                : newListOrderValueMax + 1,
            };
          return item;
        })
        .sort((a, b) => a.order - b.order)
        .map((item, i) => {
          return { ...item, order: i + 1 };
        });
      setData((d) => {
        return { ...d, [oldStatus]: temp };
      });

      return;
    }
    // CASE 1 ENDS HERE

    // CASE 2: Drag across multiple lists
    let tempGaveList = data[oldStatus]
      .filter((item) => item.id !== id)
      .sort((a, b) => a.order - b.order)
      .map((item, i) => {
        return { ...item, order: i + 1 };
      });

    let tempRecievedList = [
      ...data[newStatus],
      {
        ...dropCard,
        order: targetCard ? targetCard.order - 1 : newListOrderValueMax + 1,
      },
    ]
      .sort((a, b) => a.order - b.order)
      .map((item, i) => {
        return { ...item, order: i + 1 };
      });

    // At last, set state
    setData((d) => {
      return { ...d, [oldStatus]: tempGaveList, [newStatus]: tempRecievedList };
    });

    // CASE 2 ENDS HERE
  };
  // Handle Data ends here

  return (
    <div className="trello_page">
      {/* Sidebar */}
      <div className="app-sidebar">
        <div className="logo">
          <i className="fab fa-trello"></i>
        </div>
      </div>
      <div className="app-content-area">
        {/* Main Header */}
        <div className="app-header">
          <div className="left">
            <div className="logo">Kanban Board</div>
          </div>
          <div className="center"></div>
          <div className="right">
            <div className="btn search">
              Search
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
        {/* App Board */}
        <main className="app-board">
          {/* Board */}
          <section className="board-body">
            <div className="wrap-lists">
              {lists.map((l) => (
                <TrelloBoard
                  data={data[l.status]}
                  key={l.status}
                  title={l.title}
                  status={l.status}
                  onChange={cardChangeHandler}
                />
              ))}
              <div className="board-col">
                <div className="list">
                  <a className="btn-list" href="#">
                    + Add another list
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

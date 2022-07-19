import { CardWrapper } from "./CardWrapper";
import "./../styles/trello-ui.css"
export default function TrelloUi() {
    const list = [
        {
            title: "MON",
            id: "mon",
            date: "05"
        },
        {
            title: "TUE",
            id: "tue",
            date: "06",
            titleCard: "CHEST DAY - WITH ARM EXERCISES",
            list: [
                {
                    title: "Bench Press Medium Grip",
                    check: "3x",
                    size: "50 lb x 5, 60 lb x 5, 70 lb x 5"
                },
                {
                    title: "Exercise B",
                    check: "1x",
                    size: "40 lb x 10"
                }
            ]
        },
        {
            title: "WED",
            id: "wed",
            date: "07",
            titleCard: "LEG DAY",
            titleCard1: "ARM DAY",
            list: [
                {
                    title: "Exercise C",
                    check: "1x",
                    size: "50 lb x 5, 60 lb x 5, 70 lb x 5"
                },
                {
                    title: "Exercise C",
                    check: "1x",
                    size: "50 lb x 5, 60 lb x 5, 70 lb x 5"
                },
                {
                    title: "Exercise C",
                    check: "1x",
                    size: "50 lb x 5, 60 lb x 5, 70 lb x 5"
                },
            ],
            list1: [
                {
                    title: "Exercise F",
                    check: "1x",
                    size: "50 lb x 5, 60 lb x 5, 70 lb x 5"
                },
            ],

        },
        {
            title: "THU",
            id: "thu",
            date: "08"
        },
        {
            title: "FRI",
            id: "fri",
            date: "09"
        },
        {
            title: "SAT",
            id: "sat",
            date: "10"
        },
        {
            title: "SUN",
            id: "sun",
            date: "11"
        },
    ]
    return (
        <div className="container">
            <div className="container-flex">
                {list.map(item => {
                    return (
                        <div className="title">
                            {item.title}
                            <div className="card" key={item.id}>
                                <div className={`card_date ${item.date === "09" ? "card_date--current" : ""}`}>{item.date}</div>
                                {item.titleCard && <CardWrapper item={item} list={item.list} />}
                                {item.titleCard1 && <CardWrapper item={item} list={item.list1} />}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

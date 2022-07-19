import React from 'react'
import "./../styles/card-wrapper.css"
import Ellipse from "./../Ellipse.png"
import Add from "./../add.png"
export const CardWrapper = ({ item, list }) => {
    return (
        <div>
            <div className="container__trello-wrapper">
                <div className="container__trello-title">
                    <div className="card__title">{item?.titleCard}</div>
                    <div className="card__ellipse">
                        <img src={Ellipse} />
                    </div>
                </div>

                {list && list.length > 0 && list?.map(itemLoop => {
                    return (
                        <div className="box">
                            <div className="card_sub--title">
                                {itemLoop.title}
                            </div>
                            <div className="card_sub--content">
                                <div className="card_sub--content--check">{itemLoop.check}</div>
                                <div className="card_sub--content--size">{itemLoop.size}</div>
                            </div>
                        </div>
                    )
                })}

                <div className="footer">
                    <img src={Add} />
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import "../styles/store.scss"
import { useTimer } from "../utils/timerContext";


export const Store = ({ showStore }) => {

    return (
        <div>
            {showStore &&
                (
                    <div>
                        <StoreHeader />
                        <div className="store">
                            <div className="item">
                                <div className="item-title">item1</div>
                                <div className="item-price">10</div>
                            </div>
                            <div className="item">
                                <div className="item-title">item1</div>
                                <div className="item-price">10</div>
                            </div>
                            <div className="item">
                                <div className="item-title">item1</div>
                                <div className="item-price">10</div>
                            </div>
                            <div className="item">
                                <div className="item-title">item1</div>
                                <div className="item-price">10</div>
                            </div>
                            <div className="item">
                                <div className="item-title">item1</div>
                                <div className="item-price">10</div>
                            </div>
                            <div className="item">
                                <div className="item-title">item1</div>
                                <div className="item-price">10</div>
                            </div>
                            <div className="item">
                                <div className="item-title">item1</div>
                                <div className="item-price">10</div>
                            </div>
                            <div className="item">
                                <div className="item-title">item1</div>
                                <div className="item-price">10</div>
                            </div>
                        </div>
                    </div>)}
        </div>
    )
}

export const StoreHeader = () => {
    const {
        allElapsedMinutes, setAllElapsedMinutes
    } = useTimer()
    return (
        <div>
            <span>StoreHeader</span>
            <div>points:{allElapsedMinutes}</div>

        </div>
    )

}

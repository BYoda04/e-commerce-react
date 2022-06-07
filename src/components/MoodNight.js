import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../store/slices/dayORnight.slice';

const MoodNight = () => {

    const dayORnight = useSelector(state=>state.dayORnight)
    const dispatch = useDispatch()

    const mood = ()=>dispatch(changeColor())

    return (
        <div className={dayORnight ? 'night cursor' : 'day cursor' } onClick={mood}>
            <p>{ dayORnight ? <ion-icon name="moon-outline"></ion-icon> : <ion-icon name="sunny-outline"></ion-icon> }</p>
        </div>
    );
};

export default MoodNight;